import { jsonArrayMember, jsonMember, jsonObject } from "typedjson";

@jsonObject()
export default class TypeDefinition {
  static getPrimaryKey: (def: TypeDefinition) => void

  @jsonMember(String, { name: "Parent" })
  parent: string
  @jsonArrayMember(String, { name: "TypeArguments" })
  typeArguments: string[]
  @jsonMember(String, { name: "Namespace" })
  namespace: string  
  @jsonMember(String, { name: "TypeDescription" })
  typeDescription: string
  @jsonMember(String, { name: "AssemblyForeignKey" })
  assemblyForeignKey: string
}