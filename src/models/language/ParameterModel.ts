import { jsonMember, jsonObject } from "typedjson";

@jsonObject()
export default class ParameterModel {
  @jsonMember(String, { name: 'Name' })
  name: string = null

  @jsonMember(String, { name: 'Type' })
  type: string
}