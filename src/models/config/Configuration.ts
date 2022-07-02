import { jsonMember, jsonObject } from "typedjson";
import MemberConfig from "./MemberConfig";
import TypeConfig from "./TypeConfig";

@jsonObject
export default class Configuration {
  @jsonMember(TypeConfig)
  type: TypeConfig
  @jsonMember(MemberConfig)
  member: MemberConfig
}