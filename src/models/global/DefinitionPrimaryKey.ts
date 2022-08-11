import { jsonMember, jsonObject } from "typedjson"

@jsonObject()
export default class DefinitionPrimaryKey {
  @jsonMember(String, { name: 'DefinitionTypeName' })
  definitionTypeName: string
  @jsonMember(String, { name: 'PrimaryKeyName' })
  primaryKeyMemberName: string
}