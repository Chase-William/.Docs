import { readFileSync } from "fs"
import path = require("path")
import { TypedJSON } from "typedjson"
import AssemblyDefinition from "./AssemblyDefinition"
import DefinitionPrimaryKey from "./DefinitionPrimaryKey"
import ICodebaseMap from "./ICodebaseMap"
import ProjectDefinition from "./ProjectDefinition"
import TypeDefinition from "./TypeDefinition"

const PROJECTS_FOLDER_NAME = 'project'
const GLOBAL_META_FOLDER = 'global'
const GLOBAL_META_TYPES_FILE = 'types.json'
const GLOBAL_META_ASSEMBLIES_FILE = 'assemblies.json'
const GLOBAL_META_PROJECTS_FILE = 'projects.json'
const GLOBAL_META_PRIMARY_KEY_FILE = '_keys.json'


function loadAssemblyDefinitions(globalPath: string): AssemblyDefinition[] {
  return new TypedJSON(AssemblyDefinition).parseAsArray(readFileSync(path.join(globalPath, GLOBAL_META_ASSEMBLIES_FILE), { encoding: 'utf-8' }))
}

function loadProjectDefinitions(globalPath: string): ProjectDefinition[] {
  return new TypedJSON(ProjectDefinition).parseAsArray(readFileSync(path.join(globalPath, GLOBAL_META_PROJECTS_FILE), { encoding: 'utf-8' }))
}

function loadTypeDefinitions(globalPath: string): TypeDefinition[] {
  return new TypedJSON(TypeDefinition).parseAsArray(readFileSync(path.join(globalPath, GLOBAL_META_TYPES_FILE), { encoding: 'utf-8' }))
}

function loadPrimaryKeys(globalPath: string): DefinitionPrimaryKey[] {
  return new TypedJSON(DefinitionPrimaryKey).parseAsArray(readFileSync(path.join(globalPath, GLOBAL_META_PRIMARY_KEY_FILE), { encoding: 'utf-8' }))
}

export default class CodebaseManager implements ICodebaseMap {
  typeMap: Map<string, TypeDefinition>
  asmMap: Map<string, AssemblyDefinition>
  projMap: Map<string, ProjectDefinition>

  rootProject: ProjectDefinition  

  load(rootPath: string, projectName: string): void {
    const globalPath = path.join(rootPath, GLOBAL_META_FOLDER)  
    const KEYS = loadPrimaryKeys(globalPath)
    const PROJECTS_DIR = path.join(rootPath, PROJECTS_FOLDER_NAME)

    /**
     * Problem:
     * I want to set the functionality of the getPrimaryKey Functional expression to get the value from whater
     * member is specified in the KEYS collection.
     * 
     * Desire Approach Example:
     * I want to assign the TypeDefintion.prototype.getPrimaryKey functional expression a function defined here
     * that will return the desired value. I don't want to iterate through all the types and call the .bind() function
     * to bind the function to the class instance. I want that to be automatically done upon creation of the type 
     * as I changed its definition.
     * 
     * Solution:
     * I didn't know of / think I could use static methods in `jscommon`, but after looking through: 
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static. I realized I can
     * and decided to give it a go. Therefore I created the solution below from the idea seeing the link gave me.
     */

    KEYS.forEach(key => {
      // Make the first character lowercase to match the style used in JS/TS (data was serialized and provided by a C# codebase)
      key.primaryKeyMemberName = key.primaryKeyMemberName.charAt(0).toLowerCase() + key.primaryKeyMemberName.slice(1)
      switch (key.definitionTypeName) {
        case TypeDefinition.name:
          {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const keyGetter = (v: TypeDefinition) => v[key.primaryKeyMemberName]
            TypeDefinition.getPrimaryKey = keyGetter
          }          
          break;
        case AssemblyDefinition.name:
          {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const keyGetter = (v: AssemblyDefinition) => v[key.primaryKeyMemberName]
            AssemblyDefinition.getPrimaryKey = keyGetter
          }
            break;
        case ProjectDefinition.name:
          {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const keyGetter = (v: ProjectDefinition) => v[key.primaryKeyMemberName]
            ProjectDefinition.getPrimaryKey = keyGetter
          }
          break;
        default:
          throw new Error(`Was unable to determine DefinitionPrimaryKey type instance of values: ${key} when mapping it's key to a bound functional expression.`)
      }
    })

    /*
    Load types, assemblies, projects from provided json files
    */
    const types = loadTypeDefinitions(globalPath)      
    const assemblies = loadAssemblyDefinitions(globalPath)
    const projects = loadProjectDefinitions(globalPath)

    // Test Keys
    // console.log("-------------- types ---------------- ")
    // types.forEach(v => console.log(TypeDefinition.getPrimaryKey(v)))
    // console.log("-------------- assemblies ---------------- ")
    // assemblies.forEach(v => console.log(AssemblyDefinition.getPrimaryKey(v)))
    // console.log("-------------- projects ---------------- ")
    // projects.forEach(v => console.log(ProjectDefinition.getPrimaryKey(v)))

    /*
    Create maps
    */
    this.typeMap = new Map<string, TypeDefinition>(types.map(entry => [TypeDefinition.getPrimaryKey(entry), entry]))    
    this.asmMap = new Map<string, AssemblyDefinition>(assemblies.map(entry => [AssemblyDefinition.getPrimaryKey(entry), entry]))    
    this.projMap = new Map<string, ProjectDefinition>(projects.map(entry => [ProjectDefinition.getPrimaryKey(entry), entry]))
    
    /*
    1. Create a one-way reference from each local project to it's local project dependencies if it has any.
    2. Load the models for each project.
    */
    this.projMap.forEach(_proj => {
      if (_proj.foreignKeysOfLocalProjects.length > 0)
      {
        _proj.foreignKeysOfLocalProjects.forEach(projectDepName => {
          _proj.localProjects.push(this.projMap.get(projectDepName))
        })
      }
      _proj.loadCodebase(PROJECTS_DIR)      
    })

    /*  
    Create bi-directional references to improve future lookups
    */
    this.typeMap.forEach(_type => {
      // A type now has a reference to it's assembly
      const asm = this.asmMap.get(_type.assemblyForeignKey)
      // Type has a reference to it's assembly
      _type.assembly = asm
      // Assembly has a collection of types with this type now in it
      asm.types.push(_type)
    })
    this.asmMap.forEach(asm => {
      // If a value for the key was provided (not fasley) create a reference, otherwise skip
      if (asm.projectForeignKey)
      {
        const proj = this.projMap.get(asm.projectForeignKey)
        // This assembly now references it's project
        asm.project = proj
        // The assembly's project now can reference back to the assembly
        proj.assembly = asm
      }      
    })    

    this.projMap.forEach(_proj => {
      _proj.codebase.bindToCodebaseMap(this)
    })

    // Show References
    // console.log("-------------- types ---------------- ")
    // types.forEach(v => console.log(v))
    // console.log("-------------- assemblies ---------------- ")
    // assemblies.forEach(v => console.log(v))
    // console.log("-------------- projects ---------------- ")
    // projects.forEach(v => console.log(v))   
    // Set the root project     
    this.rootProject = this.projMap.get(projectName)
  }  
}