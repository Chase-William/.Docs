import { jsonMember, jsonObject } from 'typedjson';
import IAmFullTypeModel from '../interfaces/IAmFullTypeModel';
import CommonComment from '../../comments/CommonComment';
import MemberModel from './MemberModel';
import IAmPropertyModel from '../interfaces/members/IAmPropertyModel';
import IAmSlicedTypeModel from '../interfaces/types/IAmSlicedTypeModel';
import IAmProjectManager from '../../../ProjectManager';

@jsonObject()
export default class PropertyModel extends MemberModel<CommonComment> implements IAmPropertyModel {
  @jsonMember(Boolean, { name: 'HasGetter' })
  hasGetter: boolean;
  @jsonMember(Boolean, { name: 'HasSetter' })
  hasSetter: boolean;  
  @jsonMember(Boolean, { name: 'IsGetPublic' })
  isGetPublic: boolean;
  @jsonMember(Boolean, { name: 'IsSetPublic' })
  isSetPublic: boolean;
  @jsonMember(Boolean, { name: 'IsGetPrivate' })
  isGetPrivate: boolean;
  @jsonMember(Boolean, { name: 'IsSetPrivate' })
  isSetPrivate: boolean;   
  @jsonMember(Boolean, { name: 'IsGetProtected' })
  isGetProtected: boolean;
  @jsonMember(Boolean, { name: 'IsSetProtected' })
  isSetProtected: boolean;
  @jsonMember(Boolean, { name: 'IsGetInternal' })
  isGetInternal: boolean;
  @jsonMember(Boolean, { name: 'IsSetInternal' })
  isSetInternal: boolean;

  @jsonMember(Boolean, { name: 'IsVirtual' })
  isVirtual: boolean;
  @jsonMember(Boolean, { name: 'IsAbstract' })
  isAbstract: boolean;

  @jsonMember(String, { name: 'Type' })
  _type: string
  type: IAmSlicedTypeModel

  bind(projManager: IAmProjectManager): void {
    this.type = projManager.getTypeChecked(this._type)
    super.bind(projManager)
  }
}
