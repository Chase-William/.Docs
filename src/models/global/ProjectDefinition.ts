import { jsonArrayMember, jsonMember, jsonObject } from "typedjson";
import AssemblyDefinition from "./AssemblyDefinition";

@jsonObject()
export default class ProjectDefinition {
  static getPrimaryKey: (def: ProjectDefinition) => string

  @jsonMember(String, { name: 'ProjectName' })
  projectName: string
  @jsonMember(String, { name: 'ProjectDirectory' })
  projectDirectory: string
  @jsonMember(String, { name: 'ProjectFileName' })
  projectFileName: string
  @jsonMember(String, { name: 'ProjectPath' })
  projectPath: string
  @jsonArrayMember(String, { name: 'LocalProjectDependencies' })
  localProjectDependencies: string

  assembly: AssemblyDefinition
}