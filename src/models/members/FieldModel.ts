import { jsonMember, jsonObject } from 'typedjson';
import CommonComment from '../written/CommonComment';
import MemberModel from './MemberModel';

@jsonObject()
export default class FieldModel extends MemberModel<CommonComment> {
  @jsonMember(Boolean, { name: 'IsReadonly' })
  isReadonly: boolean;
  @jsonMember(Boolean, { name: 'IsConstant' })
  isConstant: boolean;
}
