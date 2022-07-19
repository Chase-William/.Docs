import { existsSync, fstat, lstatSync, readdirSync, readFileSync, Stats } from "fs"
import path = require("path")
import checkAndConfigProjectIfNeeded from "./CSProjChecker"
import Configuration, { loadConfiguration } from "./models/config/Configuration"
import { execSync } from "child_process";

export default class Router {
  outputPath = './docs'
  docsharkCoreExePath = 'Docshark.Runner.exe'
  csProjPath: string
  dllPath: string
  xmlPath: string
  config: Configuration

  constructor(args: string[]) {
    // Get the dir of docshark.exe as we need to use it later for configuration loading
    // Doesn't work in dev
    const docsharkLocation = args[0].slice(0, args[0].lastIndexOf('\\'))
    
    /**
     * Determine the approach the user has taken.
     * 
     * Either:
     * - .dll & .xml paths exist
     * or
     * - a path to or to where a .csproj can be found
     */

    for (let i = 2; i < args.length; i++) {
      switch (args[i]) {
        // Case for my development environment
        case '--development-env':
          {
            const devBasePath = process.cwd()
            this.docsharkCoreExePath = path.join(devBasePath, 'vendor\\Docshark.Core\\src\\Docshark.Runner\\bin\\Debug\\net6.0\\Docshark.Runner.exe')
            this.csProjPath = path.join(devBasePath, 'vendor\\Docshark.Core\\test\\Docshark.Test.Data\\Docshark.Test.Data.csproj')
            this.dllPath = path.join(devBasePath, 'vendor\\Docshark.Core\\test\\Docshark.Test.Data\\bin\\Debug\\net6.0\\Docshark.Test.Data.dll')
            this.xmlPath = path.join(devBasePath, 'vendor\\Docshark.Core\\test\\Docshark.Test.Data\\bin\\Debug\\net6.0\\Docshark.Test.Data.xml')
            this.config = loadConfiguration(devBasePath, './configurations/external-perspective.json')
          }
        return
        case '-o': // Output path
          this.outputPath = args[++i]          
          break;
        case '-dll': // Dll path
          this.dllPath = args[++i]
          if (!existsSync(this.dllPath))
            throw new Error('The given .dll path of ' + this.dllPath + ' does not exist.')
          break;
        case '-xml': // Xml path
          this.xmlPath = args[++i]
          if (!existsSync(this.xmlPath))
            throw new Error('The given .xml path of ' + this.xmlPath + ' does not exist.')
          break;
        case '-c': // Config path      
          this.config = loadConfiguration(process.cwd(), process.argv[++i])
          break;
        case '--external': // Shorthand switch use default external config
          this.routeDefaultConfig(docsharkLocation, 'external')  
          break;
        case '--internal': // Shorthard switch use default internal config
          this.routeDefaultConfig(docsharkLocation, 'internal')        
          break;
        case '-core': // Docshark.Core path for development purposes (testing)
          this.docsharkCoreExePath = args[++i]
          break;
        default: // A argument that matches no qualifiers is assumed to be the .csproj path
          this.csProjPath = args[i]
          if (!existsSync(this.csProjPath))
            throw new Error('The given .csproj path of ' + this.csProjPath + ' does not exist.')
          break;
      }
    }

    // Check to see if a config was already loaded (user provided one or in dev env)
    if (!this.config) // If not, load a default one
      this.config = loadConfiguration(docsharkLocation, null)

    // If csproj approach was not used and the .dll and .xml paths are set,
    // if so we can continue and run the app.
    // Otherwise we will need to use the .csproj to find the .dll and .xml or 
    // examine the process folder
    if (!this.csProjPath && this.dllPath && this.xmlPath)
      return
    
    // csproj approach was used via not providing it or the .dll and .xml path meaning;
    // the .csproj file should be in the currently working directory
    // May also possibily need to mod the .csproj and build the project too
    if (!this.csProjPath) {
      this.csProjPath = this.getCSProjectPath(process.cwd())
    }

    // Check to see if a .csproj is not specified in the given path
    if (!this.csProjPath.endsWith('.csproj')) {
      this.csProjPath = this.getCSProjectPath(this.csProjPath)
    }

    // At this point we have a valid csproj target

    // Check if the project is configured for .xml comment output
    // Execute the block to build the project as .xml comment gen wasn't enabled
    if (checkAndConfigProjectIfNeeded(this.csProjPath)) {
      // Configued .csproj, now build to produce .xml
      if (!this.tryBuildDotnetProject(this.csProjPath))
        throw new Error(`Failed to build C# project at ${this.csProjPath}. The project needs to be built because it's 
          configuration was just changed to produce .xml docs for Docshark. Try building the project yourself and 
          once complete run Docshark again.`)
    }
    
    // Get the path to where the csproj is as that is where we begin our search
    const csprojPathOnly = this.csProjPath.slice(0, this.csProjPath.lastIndexOf('\\'))
    const fileName = this.csProjPath.slice(this.csProjPath.lastIndexOf('\\') + 1, this.csProjPath.lastIndexOf('.'))
    const dllFileName =  fileName + '.dll'
    const xmlFileName =  fileName + '.xml'

    // Get paths to the .dll and .xml
    this.dllPath = this.findFileRecursively([csprojPathOnly], dllFileName)
    if (!this.dllPath)
      throw new Error(`Unable to locate ${dllFileName} under ${csprojPathOnly} directory.`)
    this.xmlPath = this.findFileRecursively([csprojPathOnly], xmlFileName)
    if (!this.xmlPath)
      throw new Error(`Unable to locate ${xmlFileName} under ${csprojPathOnly} directory.`)
  }

  /**
   * Routes to the correct location for retrieving a default configuration based off invocation location.
   * @param basePath 
   * @param fileName 
   */
  routeDefaultConfig(basePath: string, fileName: string): void {
    if (basePath.includes('docshark.exe')) {
      this.config = loadConfiguration(basePath, fileName)
    } else {
      this.config = loadConfiguration(process.cwd(), fileName)
    }
  }

  /**
   * Finds a field recursively and returns the file with the path.
   * @param basePath starting path
   * @param fileToFind filename with extension to locate
   * @returns full path and filename of target or null if not found
   */
  findFileRecursively(basePath: string[], fileToFind: string): string | null {
    const currentPath = basePath.join('\\')
    const dirs = readdirSync(currentPath)
    for (const dir of dirs) {
      if (lstatSync(path.join(currentPath, dir)).isDirectory()) { // Continuation Case
        basePath.push(dir)
        const fileFound = this.findFileRecursively(basePath, fileToFind)
        if (typeof fileFound !== null)
          return fileFound
        basePath.pop()
      } else if (dir === fileToFind) { // Base case
        return path.join(currentPath, dir)
      }
    }
    return null
  }

  getCSProjectPath(basePath: string): string {
    const csprojFile = readdirSync(basePath).find((value: string) => value.endsWith('.csproj'))
    if (!csprojFile)
      throw new Error('The path of ' + basePath + ' doesn\'t contain a .csproj file.')
    return path.join(basePath , csprojFile)
  }

  /**
   * Attempts to build a provided project.
   * @param csproj project to be built
   * @returns true if success, false if failure
   */
  tryBuildDotnetProject(csproj: string): boolean {
    try {
      execSync(`dotnet build "${csproj}"`)
    }
    catch {
      return false
    }
    return true
  }
}

