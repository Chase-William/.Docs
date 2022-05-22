import { JsonObject, JsonProperty } from "typescript-json-serializer";

@JsonObject()
export default class Model {
  parent: Model = null

  @JsonProperty({name: 'Name'})
  name: string

  constructor(name: string, parent: Model) {
    this.name = name;
    this.parent = parent;
  }

  // getNamespace(strs: Array<string>): void {
  //   strs.push(this.name)
  //   if (this.parent !== null)
  //     this.parent.getNamespace(strs)
  // }
}