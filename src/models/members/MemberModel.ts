import { jsonMember, jsonObject } from 'typedjson';
import Model from '../Model';
import CommonComment from '../written/CommonComment';

@jsonObject()
export default class MemberModel<T extends CommonComment> extends Model {
  @jsonMember(String, { name: 'Type' })
  type: string;
  @jsonMember(CommonComment, { name: 'Comments' })
  comments: T;
  @jsonMember(Boolean, { name: 'IsPublic' })
  isPublic: boolean;
  @jsonMember(Boolean, { name: 'IsPrivate' })
  isPrivate: boolean;  
  @jsonMember(Boolean, { name: 'IsStatic' })
  isStatic: boolean;  
  @jsonMember(Boolean, { name: 'IsProtected' })
  isProtected: boolean;
  @jsonMember(Boolean, { name: 'IsInternal' })
  isInternal: boolean;
}
