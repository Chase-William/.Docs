import { jsonMember, jsonObject } from 'typedjson';
import CommonComment from '../written/CommonComment';
import MemberModel from './MemberModel';

@jsonObject()
export default class EventModel extends MemberModel<CommonComment> {
  @jsonMember(Boolean, { name: 'IsAbstract' })
  isAbstract: boolean;
  @jsonMember(Boolean, { name: 'IsVirtual' })
  isVirtual: boolean;
}
