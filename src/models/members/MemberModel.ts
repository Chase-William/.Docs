import { JsonObject, JsonProperty } from "typescript-json-serializer"
import CommonComment from "../written/CommonComment"

@JsonObject()
export default class MemberModel<T extends CommonComment> {
  @JsonProperty({name: 'Name'})
  name: string
  @JsonProperty({name: 'Type'})
  type: string
  @JsonProperty({name: 'Comments'})
  comments: T
}