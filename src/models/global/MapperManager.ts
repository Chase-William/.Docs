import { readFileSync } from "fs"
import path = require("path")
import { TypedJSON } from "typedjson"
import AssemblyDefinition from "./AssemblyDefinition"
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

// function loadPrimaryKeys(globalPath: string): PrimaryKeyDefinition[] {
//   throw Error()
// }

export interface IGlobalMetaMap {
  typeMap: Map<string, TypeDefinition>
  asmMap: Map<string, AssemblyDefinition>
  projMap: Map<string, ProjectDefinition>
}

export default class MapperManager implements IGlobalMetaMap {

  typeMap: Map<string, TypeDefinition>
  asmMap: Map<string, AssemblyDefinition>
  projMap: Map<string, ProjectDefinition>

  load(rootPath: string): void {
    const globalPath = path.join(rootPath, GLOBAL_META_FOLDER)
    const types = loadTypeDefinitions(globalPath)
    const assemblies = loadAssemblyDefinitions(globalPath)
    const projects = loadProjectDefinitions(globalPath)
    this.typeMap = new Map<string, TypeDefinition>(types.map(entry => [entry.typeDescription, entry]))    
  }

  
}

// class PrimaryKeyDefinition {

// }