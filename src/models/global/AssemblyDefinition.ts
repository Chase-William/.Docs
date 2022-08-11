import { jsonMember, jsonObject } from "typedjson";

@jsonObject()
export default class AssemblyDefinition {
  static getPrimaryKey: (def: AssemblyDefinition) => void

  @jsonMember(String, { name: 'AssemblyName' })
  assemblyName: string
  @jsonMember(String, { name: 'ProjectForeignKey' })
  projectForeignKey: string | undefined | null
}