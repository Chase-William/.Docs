import { jsonMember, jsonObject } from "typedjson";

@jsonObject()
export default class Model {
  @jsonMember(String, { name: 'Name' })
  name: string
}