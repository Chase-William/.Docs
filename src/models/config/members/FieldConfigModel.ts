import { jsonMember, jsonObject } from "typedjson";
import MemberConfigModel from "./MemberConfigModel";

@jsonObject({ name: 'field' })
export default class FieldConfigModel extends MemberConfigModel {
  @jsonMember(Boolean)
  denoteIfConst: boolean
  @jsonMember(Boolean)
  denoteIfReadonly: boolean
}