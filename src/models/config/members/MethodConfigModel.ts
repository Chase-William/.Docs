import { jsonMember, jsonObject } from "typedjson";
import MemberConfigModel from "./MemberConfigModel";

@jsonObject({ name: 'method' })
export default class MethodConfigModel extends MemberConfigModel {
 
}