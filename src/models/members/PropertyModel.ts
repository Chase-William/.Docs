import { jsonMember, jsonObject } from 'typedjson';
import IAmPolymorphicable from '../interfaces/IAmPolymorphicable';
import CommonComment from '../written/CommonComment';
import MemberModel from './MemberModel';

@jsonObject()
export default class PropertyModel extends MemberModel<CommonComment> implements IAmPolymorphicable {
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
}
