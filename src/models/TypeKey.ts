import { jsonMember, jsonObject } from "typedjson";

@jsonObject()
export default class TypeKey {
  @jsonMember(Boolean, { name: "IsGenericParameter"})
  isGenericParameter: boolean
  @jsonMember(String, { name: "ForeignKey" })
  foreignKey: string
}