import { existsSync, fstat, lstatSync, readdirSync, readFileSync, Stats } from "fs"
import path = require("path")
import Configuration, { loadConfiguration } from "./models/config/Configuration"
import { execSync } from "child_process";

export default class Router {
  outputPath = '.docs'
  docsharkCoreExePath = 'DotDocs.Runner.exe'
  csProjPath: string
  config: Configuration

  constructor(args: string[]) {
    // Get the dir of dotdocs.exe as we need to use it later for configuration loading
    // Doesn't work in dev
    const dotDocsLocation = args[0].slice(0, args[0].lastIndexOf('\\'))
    
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
            this.docsharkCoreExePath = path.join(devBasePath, 'vendor\\DotDocs.Core\\src\\DotDocs.Runner\\bin\\Debug\\net6.0\\DotDocs.Runner.exe')
            if (args[++i] == '--core') {
              this.csProjPath = path.join(devBasePath, 'vendor\\DotDocs.Core\\src\\DotDocs.Core\\DotDocs.Core.csproj')
            }
            this.config = loadConfiguration(devBasePath, './configurations/external-perspective.json')
          }
        return
        case '-o': // Output path
          this.outputPath = args[++i]          
          break;
        case '-c': // Config path      
          this.config = loadConfiguration(dotDocsLocation, process.argv[++i])
          break;
        case '--external': // Shorthand switch use default external config
          this.routeDefaultConfig(dotDocsLocation, 'external')  
          break;
        case '--internal': // Shorthard switch use default internal config
          this.routeDefaultConfig(dotDocsLocation, 'internal')        
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
      this.config = loadConfiguration(dotDocsLocation, null)
   
    // csproj approach was used via not providing it or the .dll and .xml path meaning;
    // the .csproj file should be in the currently working directory
    // May also possibily need to mod the .csproj and build the project too
    if (!this.csProjPath) {
      throw new Error("You must provide a .csproj file path.");
    } else if (!existsSync(this.csProjPath)) {
      throw new Error(`The given path of ${this.csProjPath} does not exist.`)
    }
  }

  /**
   * Routes to the correct location for retrieving a default configuration based off invocation location.
   * @param basePath 
   * @param fileName 
   */
  routeDefaultConfig(basePath: string, fileName: string): void {
    if (basePath.includes('DotDocs.exe')) {
      this.config = loadConfiguration(basePath, fileName)
    } else {
      this.config = loadConfiguration(process.cwd(), fileName)
    }
  }
}
