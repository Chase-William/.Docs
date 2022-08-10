import { jsonMember, jsonObject } from 'typedjson';
import IAmPolymorphicable from '../interfaces/IAmPolymorphicable';
import CommonComment from '../written/CommonComment';
import MemberModel from './MemberModel';

@jsonObject()
export default class EventModel extends MemberModel<CommonComment> implements IAmPolymorphicable {
  @jsonMember(Boolean, { name: 'IsAbstract' })
  isAbstract: boolean;
  @jsonMember(Boolean, { name: 'IsVirtual' })
  isVirtual: boolean;
}
