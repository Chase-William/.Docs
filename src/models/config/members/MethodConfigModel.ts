import { jsonMember, jsonObject } from "typedjson";
import PolymorphicConfigable from "../interfaces/PolymorphicConfigable";
import MemberConfigModel from "./MemberConfigModel";

@jsonObject({ name: 'method' })
export default class MethodConfigModel extends MemberConfigModel implements PolymorphicConfigable {
  @jsonMember(Boolean)
  denoteIfVirtual: boolean
  @jsonMember(Boolean)
  denoteIfAbstract: boolean
}