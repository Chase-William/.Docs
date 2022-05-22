import { JsonObject, JsonProperty } from "typescript-json-serializer"
import Model from "../Model"
import CommonComment from "../written/CommonComment"

@JsonObject()
export default class TypeModel<T extends CommonComment> extends Model {
  @JsonProperty({name: 'Namespace'})
  namespace: string
  @JsonProperty({name: 'FullName'})
  fullName: string
  @JsonProperty({name: 'Comments'})
  comments: T

  constructor(name: string, parent: Model) {
    super(name, parent)
  }
}