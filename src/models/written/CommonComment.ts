import { JsonObject, JsonProperty } from "typescript-json-serializer"
import InheritDocTag from "./InheritDocTag"

@JsonObject()
export default class CommonComment {
  @JsonProperty({name: 'Summary'})
  summary: string
  @JsonProperty({name: 'Remarks'})
  remarks: string
  @JsonProperty({name: 'Example'})
  example: string
  @JsonProperty({name: 'Inheritdoc'})
  inheritdoc: InheritDocTag
}