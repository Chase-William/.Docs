import { jsonMember, jsonObject } from 'typedjson';
import IAmSingletonable from '../interfaces/IAmSingletonable';
import CommonComment from '../../comments/CommonComment';
import AccessibilityModel from '../AccessibilityModel';
import IAmSlicedTypeModel from '../interfaces/types/IAmSlicedTypeModel';
import IAmProjectManager from '../../../ProjectManager';

@jsonObject()
export default class MemberModel<T extends CommonComment> extends AccessibilityModel implements IAmSingletonable {  
  @jsonMember(CommonComment, { name: 'Comments' })
  comments: T;
  @jsonMember(Boolean, { name: 'IsStatic' })
  isStatic: boolean;  
  @jsonMember(String, { name: 'DeclaringType' })
  _declaringTypeId: string
  DeclaringType: IAmSlicedTypeModel | null

  bind(projManager: IAmProjectManager): void {
    // Intentional unchecking
    this.DeclaringType = projManager.types.get(this._declaringTypeId) ?? null
  }
}
