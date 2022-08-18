import { jsonMember, jsonObject } from 'typedjson';
import IAmFieldModel from '../../interfaces/IAmFieldModel';
import CommonComment from '../../written/CommonComment';
import MemberModel from './MemberModel';

@jsonObject()
export default class FieldModel extends MemberModel<CommonComment> implements IAmFieldModel {
  @jsonMember(Boolean, { name: 'IsReadonly' })
  isReadonly: boolean;
  @jsonMember(Boolean, { name: 'IsConstant' })
  isConstant: boolean;

  @jsonMember(String, { name: 'Type' })
  type: string
}
