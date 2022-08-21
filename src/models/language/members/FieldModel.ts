import { AnyT, jsonMember, jsonObject } from 'typedjson';
import IAmTypeModel from '../interfaces/IAmFullTypeModel';
import CommonComment from '../../comments/CommonComment';
import MemberModel from './MemberModel';
import IAmFieldModel from '../interfaces/members/IAmFieldModel';

@jsonObject()
export default class FieldModel extends MemberModel<CommonComment> implements IAmFieldModel {
  @jsonMember(Boolean, { name: 'IsReadonly' })
  isReadonly: boolean;
  @jsonMember(Boolean, { name: 'IsLiteral' })
  isLiteral: boolean;
  @jsonMember(AnyT, { name: 'RawConstantValue' })
  rawConstantValue: unknown

  @jsonMember(String, { name: 'Type' })
  _type: string
  type: IAmTypeModel

  bind(types: Map<string, IAmTypeModel>): void {
    this.type = types.get(this._type)
  }
}
