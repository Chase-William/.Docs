import { jsonArrayMember, jsonMember, jsonObject } from "typedjson";

@jsonObject()
export default class TypeDefinition {
  @jsonMember(String, { name: "Id" })
  id: string
  @jsonMember(String, { name: "Parent" })
  parent: string
  @jsonArrayMember(String, { name: "TypeArguments" })
  typeArguments: string[]
  @jsonMember(String, { name: "Namespace" })
  namespace: string
  @jsonMember(String, { name: "Module" })
  module: string
  @jsonMember(String, { name: "TypeName" })
  typeName: string  
}