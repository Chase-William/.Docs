import { JsonObject, JsonProperty } from "typescript-json-serializer"
import CommonComment from "../written/CommonComment"

@JsonObject()
export default class TypeModel<T extends CommonComment> {
  @JsonProperty({name: 'Namespace'})
  namespace: string
  @JsonProperty({name: 'FullName'})
  fullName: string
  @JsonProperty({name: 'Comments'})
  comments: T
  @JsonProperty({name: 'Name'})
  name: string
}