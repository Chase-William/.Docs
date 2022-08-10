import { jsonMember, jsonObject } from "typedjson";

@jsonObject
export class Parameter {
  @jsonMember(String, { name: 'Name' })
  name: string;
  @jsonMember(String, { name: 'Type' })
  type: string;
}