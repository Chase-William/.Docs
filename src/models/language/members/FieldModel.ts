import { AnyT, jsonMember, jsonObject } from 'typedjson';
import CommonComment from '../../comments/CommonComment';
import MemberModel from './MemberModel';
import IAmFieldModel from '../interfaces/members/IAmFieldModel';
import IAmSlicedTypeModel from '../interfaces/types/IAmSlicedTypeModel';
import IAmProjectManager from '../../../ProjectManager';

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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  bind(projManager: IAmProjectManager): void {
    this.type = projManager.getTypeChecked(this._type)
    super.bind(projManager)
  }
}
