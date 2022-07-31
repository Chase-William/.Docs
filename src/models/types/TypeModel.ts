import { jsonMember, jsonObject } from 'typedjson';
import CommonComment from '../written/CommonComment';
import AccessibilityModel from '../AccessibilityModel';
import Model from '../Model';
import { TYPE_MAP } from '../../app';
import TypeDefinition from '../meta/TypeDefinition';

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

  getOrderedBaseTypes(): TypeDefinition[] {
    const types = new Array<TypeDefinition>()
    this.getNextBaseType(this.baseType, types)
    return types
  }

  getNextBaseType(id: string, types: TypeDefinition[]) {
    if (TYPE_MAP.has(id)) {
      const type = TYPE_MAP.get(id)
      types.push(type)
      this.getNextBaseType(type.parent, types)
    }  
  }
}
