import { jsonMember, jsonObject } from "typedjson"

@jsonObject()
export default class DefinitionPrimaryKey {
  @jsonMember(String, { name: 'DefinitionTypeName' })
  definitionTypeName: string
  @jsonMember(String, { name: 'PrimaryKeyMemberName' })
  primaryKeyMemberName: string
  @jsonMember(String, { name: 'IsCompsite' })
  isComposite: boolean
}