import { jsonMember, jsonObject } from 'typedjson';
import CommonComment from '../written/CommonComment';
import AccessibilityModel from '../AccessibilityModel';
import Model from '../Model';

/**
 * Represents any kind of <type> that can be defined.
 */
 @jsonObject()
export default class TypeModel<T extends CommonComment> extends AccessibilityModel {
  @jsonMember(String, { name: 'Namespace' })
  namespace: string;
  @jsonMember(String, { name: 'FullName' })
  fullName: string;
  isProtected: boolean;
  @jsonMember(String, { name: 'Parent' })
  baseType: string;
  @jsonMember(CommonComment, { name: 'Comments' }) // CommentComment in serialization may be a limitation
  comments: T;

  constructor(name: string, parent: Model) {
    super(name, parent);
  }
}
