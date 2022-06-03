import { jsonMember, jsonObject } from 'typedjson';
import Renderer from '../../markdown/Renderer';
import Model, { CLASS_TYPE_CODE, DELEGATE_TYPE_CODE, ENUM_TYPE_CODE, INTERFACE_TYPE_CODE, STRUCT_TYPE_CODE } from '../Model';
import Renderable from '../Renderable';
import CommonComment from '../written/CommonComment';
import Nestable from '../Nestable'
import ClassModel from './ClassModel';

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
