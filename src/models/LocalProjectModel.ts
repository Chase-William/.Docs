import { jsonArrayMember, jsonMember, jsonObject } from "typedjson"
import { ProjectManager } from "../ProjectManager"
import AssemblyModel from "./AssemblyModel"

@jsonObject()
export default class LocalProjectModel {
  @jsonMember(String, { name: 'ProjectName' })
  projectName: string
  @jsonMember(String, { name: 'ProjectDirectory' })
  projectDirectory: string
  @jsonMember(String, { name: 'ProjectFileName' })
  projectFileName: string
  @jsonMember(String, { name: 'ProjectPath' })
  projectPath: string
  @jsonArrayMember(String, { name: 'LocalProjects' })
  localProjects: string[]

  @jsonMember(String, { name: 'AssemblyId' })
  _assemblyId: string
  assembly: AssemblyModel

  @jsonMember(String, { name: 'Id' })
  id: string

  bind(projManager: ProjectManager): void {
    // Bind the assembly & project in a bi-directional fashion    
    const assembly = projManager.assemblies.get(this._assemblyId)
    this.assembly = assembly
    assembly.project = this
  }
}