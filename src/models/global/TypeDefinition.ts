import { jsonArrayMember, jsonMember, jsonObject } from "typedjson";
import Definition from "./Definition";

@jsonObject()
export default class TypeDefinition extends Definition {  
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