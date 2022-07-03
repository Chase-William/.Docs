import { existsSync, fstat, lstatSync, readdirSync, readFileSync, Stats } from "fs"
import path = require("path")
import checkAndConfigProjectIfNeeded from "./CSProjChecker"
import Configuration, { loadConfiguration } from "./models/config/Configuration"
import { execSync } from "child_process";

export default class Router {
  outputPath = './docs'
  charpCoreExePath = 'Charp.Runner.exe'
  dllPath: string
  xmlPath: string
  config: Configuration

  constructor(args: string[]) {
    let csproj: string
    /**
     * Determine the approach the user has taken.
     * 
     * Either:
     * - .dll & .xml paths exist
     * or
     * - a path to or to where a .csproj can be found
     */

    for (let i = 0; i < args.length; i++) {
      switch (args[i]) {
        // Case for my development environment
        case '--development-env':
          {
            const paths = JSON.parse(readFileSync('C:/Dev/Charp/runner.json', { encoding: 'utf-8' }))
            this.charpCoreExePath = paths.charpCore
            this.dllPath = paths.dll
            this.xmlPath = paths.xml
            this.config = loadConfiguration('./configurations/external-perspective.json')
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
          this.config = loadConfiguration(process.argv[i])
          break;
        default:
          csproj = args[i]
          if (!existsSync(csproj))
            throw new Error('The given .csproj path of ' + csproj+ ' does not exist.')
          break;
      }
    }

    // Check to see if a config was already loaded (user provided one or in dev env)
    if (!this.config) // If not, load a default one
      this.config = loadConfiguration(null)

    // If csproj approach was not used, we can return and run the app
    // Otherwise we will need to use the .csproj to find the .dll and .xml
    if (!csproj)
      return
    
    // csproj approach was used, need to aquire .dll & .xml paths
    // May also possibily need to mod the .csproj and build the project too

    // Check to see if a .csproj is not specified in the given path
    if (!csproj.endsWith('.csproj')) {
      const paths = readdirSync(csproj)
      const csprojFile = paths.find((value: string) => value.endsWith('.csproj'))
      if (!csprojFile)
        throw new Error('The given .csproj path of ' + csproj + ' doesn\'t contain a .csproj file.')
      csproj = path.join(csproj , csprojFile)
    }

    // At this point we have a valid csproj target

    // Check if the project is configured for .xml comment output
    // Execute the block to build the project as .xml comment gen wasn't enabled
    if (checkAndConfigProjectIfNeeded(csproj)) {
      // Configued .csproj, now build to produce .xml
      if (!this.tryBuildDotnetProject(csproj))
        throw new Error(`Failed to build C# project at ${csproj}. The project needs to be built because it's 
          configuration was just changed to produce .xml docs for Charp. Try building the project yourself and 
          once complete run Charp again.`)
    }
    
    // Get the path to where the csproj is as that is where we begin our search
    const csprojPathOnly = csproj.slice(0, csproj.lastIndexOf('\\'))
    const fileName = csproj.slice(csproj.lastIndexOf('\\') + 1, csproj.lastIndexOf('.'))
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

