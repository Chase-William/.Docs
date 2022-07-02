import { jsonMember, jsonObject } from "typedjson";
import ConfigModel from "../ConfigModel";

@jsonObject
export default class MemberConfigModel extends ConfigModel {
  @jsonMember(Boolean)
  denoteIfStatic: boolean
}