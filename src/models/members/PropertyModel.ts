import { jsonMember, jsonObject } from 'typedjson';
import CommonComment from '../written/CommonComment';
import MemberModel from './MemberModel';

@jsonObject()
export default class PropertyModel extends MemberModel<CommonComment> {
  @jsonMember(Boolean, { name: 'CanWrite' })
  canWrite: boolean;
  @jsonMember(Boolean, { name: 'CanRead' })
  canRead: boolean;
  @jsonMember(Boolean, { name: 'IsSetPrivate' })
  isSetPrivate: boolean;
  @jsonMember(Boolean, { name: 'IsGetPrivate' })
  isGetPrivate: boolean;
}
