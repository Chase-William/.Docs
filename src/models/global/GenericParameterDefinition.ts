import { jsonMember, jsonObject } from "typedjson";

@jsonObject()
export default class GenericParameterDefinition {
  static getPrimaryKey: (def: GenericParameterDefinition) => string

  @jsonMember(String, { name: 'BaseType' })
  baseType: string
  @jsonMember(String, { name: 'Name' })
  name: string
}