import { jsonMember, jsonObject } from 'typedjson';
import IAmEventModel from '../../interfaces/IAmEventModel';
import CommonComment from '../../written/CommonComment';
import MemberModel from './MemberModel';

@jsonObject()
export default class EventModel extends MemberModel<CommonComment> implements IAmEventModel {
  @jsonMember(Boolean, { name: 'IsAbstract' })
  isAbstract: boolean;
  @jsonMember(Boolean, { name: 'IsVirtual' })
  isVirtual: boolean;
}
