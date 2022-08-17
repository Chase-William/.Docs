import { jsonArrayMember, jsonMember, jsonObject } from "typedjson";
import TypeKey from "../TypeKey";
import TypeModel from "../types/TypeModel";
import CommonComment from "../written/CommonComment";
import AssemblyDefinition from "./AssemblyDefinition";

@jsonObject()
export default class TypeDefinition {
  static getPrimaryKey: (def: TypeDefinition) => string

  @jsonMember(String, { name: "BaseType" })
  baseType: string
  @jsonArrayMember(TypeKey, { name: "TypeArguments" })
  typeArguments: TypeKey[]
  @jsonArrayMember(TypeKey, { name: 'TypeParameters' })
  typeParameters: TypeKey[]
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
  model: TypeModel<CommonComment> = null
}