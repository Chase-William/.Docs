import { jsonMember, jsonObject } from "typedjson";
import MemberConfigModel from "./MemberConfigModel";

@jsonObject({ name: 'event' })
export default class EventConfigModel extends MemberConfigModel {
 
}