import { JsonObject, JsonProperty } from "typescript-json-serializer"
import CommonComment from "./CommonComment"

@JsonObject()
export default class MethodComment extends CommonComment {
  @JsonProperty({name: 'Parameters'})
  parameters: [string, string][]
  @JsonProperty({name: 'Returns'})
  returns: string
  @JsonProperty({name: 'Responses'})
  responses: [string, string][]
  @JsonProperty({name: 'TypeParmeter'})
  typeParameter: [string, string][]
}