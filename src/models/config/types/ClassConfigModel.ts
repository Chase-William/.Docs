import { jsonMember, jsonObject } from "typedjson";
import ConfigModel from "../ConfigModel";

@jsonObject({ name: 'class' })
export default class ClassConfigModel extends ConfigModel {
  @jsonMember(Boolean)
  denoteIfStatic: boolean
  @jsonMember(Boolean)
  denoteIfVirtual: boolean
  @jsonMember(Boolean)
  denoteIfAbstract: boolean
}