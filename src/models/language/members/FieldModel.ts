import { AnyT, jsonMember, jsonObject } from 'typedjson';
import CommonComment from '../../comments/CommonComment';
import MemberModel from './MemberModel';
import IAmFieldModel from '../interfaces/members/IAmFieldModel';
import IAmFullTypeModel from '../interfaces/IAmFullTypeModel';
import IAmSlicedTypeModel from '../interfaces/types/IAmSlicedTypeModel';

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
  type: IAmSlicedTypeModel

  bind(types: Map<string, IAmFullTypeModel>): void {
    this.type = types.get(this._type)
    super.bind(types)
  }
}
