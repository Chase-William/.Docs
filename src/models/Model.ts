import { jsonMember, jsonObject } from "typedjson";

@jsonObject()
export default class Model {
  parent: Model

  /**
   * Used in the json to identify the object's type.
   */
  @jsonMember(String, { name: 'Type' })
  type: string

  @jsonMember(String, { name: 'Name' })
  name: string

  constructor(name: string, parent: Model) {
    this.name = name;
    this.parent = parent;
  }
}
