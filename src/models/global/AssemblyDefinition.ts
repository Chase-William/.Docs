import { jsonMember, jsonObject } from "typedjson";
import ProjectDefinition from "./ProjectDefinition";
import TypeDefinition from "./TypeDefinition";

@jsonObject()
export default class AssemblyDefinition {
  static getPrimaryKey: (def: AssemblyDefinition) => string

  @jsonMember(String, { name: 'AssemblyName' })
  assemblyName: string
  @jsonMember(String, { name: 'ProjectForeignKey' })
  projectForeignKey: string | undefined | null = null

  project: ProjectDefinition = null

  types: TypeDefinition[] = new Array<TypeDefinition>()
}