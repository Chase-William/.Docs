import { jsonMember, jsonObject } from "typedjson";
import TypeKey from "./TypeKey";

@jsonObject()
export default class TypeKeyParameter extends TypeKey {
  @jsonMember(String, { name: 'ParamName' })
  paramName: string
}