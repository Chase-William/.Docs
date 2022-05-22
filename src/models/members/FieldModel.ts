import { JsonObject, JsonProperty } from "typescript-json-serializer"
import CommonComment from "../written/CommonComment"
import MemberModel from "./MemberModel"

@JsonObject()
export default class FieldModel extends MemberModel<CommonComment> {
  @JsonProperty({name: 'IsPublic'})
  isPublic: boolean
  @JsonProperty({name: 'IsReadonly'})
  isReadonly: boolean
  @JsonProperty({name: 'IsConstant'})
  isConstant: boolean
  @JsonProperty({name: 'IsStatic'})
  isStatic: boolean  
}