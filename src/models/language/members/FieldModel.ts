import { jsonMember, jsonObject } from 'typedjson';
import IAmFieldModel from '../interfaces/IAmFieldModel';
import IAmTypeModel from '../interfaces/IAmTypeModel';
import CommonComment from '../../written/CommonComment';
import MemberModel from './MemberModel';

@jsonObject()
export default class FieldModel extends MemberModel<CommonComment> implements IAmFieldModel {
  @jsonMember(Boolean, { name: 'IsReadonly' })
  isReadonly: boolean;
  @jsonMember(Boolean, { name: 'IsConstant' })
  isConstant: boolean;

  @jsonMember(String, { name: 'Type' })
  _type: string
  type: IAmTypeModel

  bind(types: Map<string, IAmTypeModel>): void {
    this.type = types.get(this._type)
  }
}
