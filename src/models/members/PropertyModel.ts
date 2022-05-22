import { JsonObject, JsonProperty } from "typescript-json-serializer"
import CommonComment from "../written/CommonComment"
import MemberModel from "./MemberModel"

@JsonObject()
export default class PropertyModel extends MemberModel<CommonComment> {
  @JsonProperty({name: 'CanWrite'})
  canWrite: boolean
  @JsonProperty({name: 'CanRead'})
  canRead: boolean
  @JsonProperty({name: 'IsSetPrivate'})
  isSetPrivate: boolean
  @JsonProperty({name: 'IsGetPrivate'})
  isGetPrivate: boolean
}