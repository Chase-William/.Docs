import { JsonObject, JsonProperty } from "typescript-json-serializer"
import Model from "../Model"
import CommonComment from "../written/CommonComment"

@JsonObject()
export default class MemberModel<T extends CommonComment> extends Model {
  @JsonProperty({name: 'Type'})
  type: string
  @JsonProperty({name: 'Comments'})
  comments: T
}