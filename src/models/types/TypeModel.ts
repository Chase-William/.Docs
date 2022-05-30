import { jsonMember, jsonObject } from 'typedjson';
import Model from '../Model';
import CommonComment from '../written/CommonComment';

/**
 * Represents any kind of <type> that can be defined.
 */
 @jsonObject()
export default class TypeModel<T extends CommonComment> extends Model {
  @jsonMember(String, { name: 'Namespace' })
  namespace: string;
  @jsonMember(String, { name: 'FullName' })
  fullName: string;
  @jsonMember(CommonComment, { name: 'Comments' }) // CommentComment in serialization may be a limitation
  comments: T;

  constructor(name: string, parent: Model) {
    super(name, parent);
  }
}
