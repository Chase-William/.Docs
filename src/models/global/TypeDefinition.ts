import { jsonArrayMember, jsonMember, jsonObject } from "typedjson";
import TypeModel from "../types/TypeModel";
import CommonComment from "../written/CommonComment";
import AssemblyDefinition from "./AssemblyDefinition";

@jsonObject()
export default class TypeDefinition {
  static getPrimaryKey: (def: TypeDefinition) => string

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

  /**
   * Set during the loading phase of global metadata.
   */
  assembly: AssemblyDefinition

  /**
   * Set during the loading of the belonging project.
   */
  model: TypeModel<CommonComment>
}