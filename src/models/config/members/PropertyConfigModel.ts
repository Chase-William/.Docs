import { jsonMember, jsonObject } from "typedjson";
import MemberConfigModel from "./MemberConfigModel";

@jsonObject({ name: 'property' })
export default class PropertyConfigModel extends MemberConfigModel {
  @jsonMember(Boolean)
  denoteIfReadonly: boolean
  @jsonMember(Boolean)
  denoteIfSetonly: boolean
}