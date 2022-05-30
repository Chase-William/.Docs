import { jsonMember, jsonObject } from 'typedjson';
import StandardMembersModel from './StandardMembersModel';

@jsonObject()
export default class ClassModel extends StandardMembersModel {
  @jsonMember(Boolean, { name: 'IsPublic' })
  isPublic: boolean;
}
