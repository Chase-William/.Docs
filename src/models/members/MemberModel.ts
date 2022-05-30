import { jsonMember, jsonObject } from 'typedjson';
import Model from '../Model';
import CommonComment from '../written/CommonComment';

@jsonObject()
export default class MemberModel<T extends CommonComment> extends Model {
  @jsonMember(String, { name: 'Type' })
  type: string;
  @jsonMember(CommonComment, { name: 'Comments' })
  comments: T;
}
