import { readFileSync } from "fs"
import path = require("path")
import { TypedJSON } from "typedjson"
import AssemblyDefinition from "./AssemblyDefinition"
import DefinitionPrimaryKey from "./DefinitionPrimaryKey"
import ICodebaseMap from "./ICodebaseMap"
import ProjectDefinition from "./ProjectDefinition"
import TypeDefinition from "./TypeDefinition"

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

export default class CodebaseMapperManager implements ICodebaseMap {
  typeMap: Map<string, TypeDefinition>
  asmMap: Map<string, AssemblyDefinition>
  projMap: Map<string, ProjectDefinition>

  load(rootPath: string): void {
    const globalPath = path.join(rootPath, GLOBAL_META_FOLDER)

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore    
    
    const keys = loadPrimaryKeys(globalPath)
    
    /**
     * Problem:
     * I want to set the functionality of the getPrimaryKey Functional expression to get the value from whater
     * member is specified in the keys collection.
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

    keys.forEach(key => {
      // Make the first character lowercase to match the style used in JS/TS (data was serialized and provided by a C# codebase)
      key.primaryKeyMemberName = key.primaryKeyMemberName.charAt(0).toLowerCase() + key.primaryKeyMemberName.slice(1)
      switch (key.definitionTypeName) {
        case TypeDefinition.name:
          {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const keyGetter = (v: TypeDefinition) => (v[key.primaryKeyMemberName] as string)
            keyGetter.bind(TypeDefinition)
            TypeDefinition.getPrimaryKey = keyGetter
          }          
          break;
        case AssemblyDefinition.name:
          {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const keyGetter = (v: AssemblyDefinition) => (v[key.primaryKeyMemberName] as string)
            keyGetter.bind(TypeDefinition)
            AssemblyDefinition.getPrimaryKey = keyGetter
          }
            break;
        case ProjectDefinition.name:
          {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const keyGetter = (v: ProjectDefinition) => (v[key.primaryKeyMemberName] as string)
            keyGetter.bind(TypeDefinition)
            ProjectDefinition.getPrimaryKey = keyGetter
          }
          break;
        default:
          throw Error(`Was unable to determine DefinitionPrimaryKey type instance of values: ${key} when mapping it's key to a bound functional expression.`)
      }
    })

    const types = loadTypeDefinitions(globalPath)      
    const assemblies = loadAssemblyDefinitions(globalPath)
    const projects = loadProjectDefinitions(globalPath)

    console.log("-------------- types ---------------- ")
    types.forEach(v => console.log(TypeDefinition.getPrimaryKey(v)))
    console.log("-------------- assemblies ---------------- ")
    assemblies.forEach(v => console.log(AssemblyDefinition.getPrimaryKey(v)))
    console.log("-------------- projects ---------------- ")
    projects.forEach(v => console.log(ProjectDefinition.getPrimaryKey(v)))

    this.typeMap = new Map<string, TypeDefinition>(types.map(entry => [entry.typeDescription, entry]))    
    this.asmMap = new Map<string, AssemblyDefinition>(assemblies.map(entry => [entry.assemblyName, entry]))    
    this.projMap = new Map<string, ProjectDefinition>(projects.map(entry => [entry.projectName, entry]))    
  }

  
}