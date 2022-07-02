import { jsonMember, jsonObject } from "typedjson"

@jsonObject
export default class ConfigModel {
  @jsonMember(Boolean)
  showIfPublic: boolean
  @jsonMember(Boolean)
  showIfProtected: boolean
  @jsonMember(Boolean)
  showIfInternal: boolean
  @jsonMember(Boolean)
  showIfInternalProtected: boolean
  @jsonMember(Boolean)
  showIfPrivate: boolean
}