import { JsonObject, JsonProperty } from "typescript-json-serializer";

@JsonObject()
export default class InheritDocTag {
  @JsonProperty({name: 'Cref'})
  cRef: string
}