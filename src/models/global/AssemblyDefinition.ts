import { jsonMember, jsonObject } from "typedjson";

@jsonObject()
export default class AssemblyDefinition {
  @jsonMember(String, { name: 'AssemblyName' })
  assemblyName: string
  @jsonMember(String, { name: 'ProjectForeignKey' })
  projectForeignKey: string | undefined | null
}