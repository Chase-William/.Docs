import { jsonMember, jsonObject } from 'typedjson';
import PolymorphicModelable from '../interfaces/PolymophicModelable';
import CommonComment from '../written/CommonComment';
import MemberModel from './MemberModel';

@jsonObject()
export default class EventModel extends MemberModel<CommonComment> implements PolymorphicModelable {
  @jsonMember(Boolean, { name: 'IsAbstract' })
  isAbstract: boolean;
  @jsonMember(Boolean, { name: 'IsVirtual' })
  isVirtual: boolean;
}
