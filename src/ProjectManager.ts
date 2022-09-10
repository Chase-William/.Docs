import { readFileSync } from "fs";
import path = require("path");
import { TypedJSON } from "typedjson";
import AssemblyModel from "./models/AssemblyModel";
import IAmTypeModel from "./models/language/interfaces/IAmFullTypeModel";
import TypeModel from "./models/language/TypeModel";
import LocalProjectModel from "./models/LocalProjectModel";

const TYPES_FILE = 'types.json'
const PROJECTS_FILE = 'projects.json'
const ASSEMBLY_FILE = 'assemblies.json'

/**
 * A sliced version of the ProjectManager class to be used by renderers.
 */
export default interface IAmProjectManager {
  types: Map<string, IAmTypeModel>
  projects: Map<string, LocalProjectModel>
  assemblies: Map<string, AssemblyModel>

  /**
   * Attempts to find the corresponding type instance for the given id.
   * Will abort process if type isn't found.
   * @param id Unique idenfitier of type to locate.
   */
  getTypeChecked(id: string): IAmTypeModel
  /**
   * Attempts to find the corresponding assembly instance for the given id.
   * Will abort process if assembly isn't found.
   * @param id 
   */
  getAssemblyChecked(id: string): AssemblyModel
}

/**
 * The ProjectManager class contains and manages all information needed for the project's objective.
 */
export class ProjectManager implements IAmProjectManager {

  types: Map<string, IAmTypeModel>
  projects: Map<string, LocalProjectModel>
  assemblies: Map<string, AssemblyModel>

  load(basePath: string): void {
    // Load all types & projects from file
    const _assemblies = new TypedJSON(AssemblyModel).parseAsArray(readFileSync(path.join(basePath, ASSEMBLY_FILE), { encoding: 'utf-8' }))
    const _projects = new TypedJSON(LocalProjectModel).parseAsArray(readFileSync(path.join(basePath, PROJECTS_FILE), { encoding: 'utf-8' }))
    const _types = new TypedJSON(TypeModel).parseAsArray(readFileSync(path.join(basePath, TYPES_FILE), { encoding: 'utf-8' }))
    //const _types = new TypedJSON(TypeModel).parseAsMap<string>(readFileSync(path.join(basePath, TYPES_FILE)), (type: TypeModel) => [ type.id, type ])
    // Map types & projects into a dictionary    
    this.assemblies = new Map(_assemblies.map(assembly => [ assembly.id, assembly ]))
    this.projects = new Map(_projects.map(project => [ project.projectName, project ]))
    this.types = new Map(_types.map(type => [ type.id, type ]))
    // Bind all types so that they reference other types in memory
    _types.forEach(type => type.bind(this))
    _projects.forEach(project => project.bind(this))
  }

  getTypeChecked(id: string): IAmTypeModel {
    const type = this.types.get(id)
    if (!type)
      throw Error(`Attempting to find type ${id} failed.`)
    return type
  }

  getAssemblyChecked(id: string): AssemblyModel {
    const assem = this.assemblies.get(id)
    if (!assem)
      throw Error(`Attempting to find assembly ${id} failed.`)
    return assem
  }
}