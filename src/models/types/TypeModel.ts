import { jsonMember, jsonObject } from 'typedjson';
import CommonComment from '../written/CommonComment';
import AccessibilityModel from '../AccessibilityModel';
import Model from '../Model';
import TypeDefinition from '../global/TypeDefinition';
import ICodebaseMap from '../global/ICodebaseMap';

export enum Accessibility {
  Public,
  Private,
  Protected,
  Internal
}

/**
 * Represents any kind of <type> that can be defined.
 */
 @jsonObject()
export default class TypeModel<T extends CommonComment> extends AccessibilityModel {
  @jsonMember(String, { name: 'Namespace' })
  namespace: string;
  @jsonMember(String, { name: 'FullName' })
  fullName: string;
  @jsonMember(String, { name: 'Parent' })
  baseType: string;
  @jsonMember(CommonComment, { name: 'Comments' }) // CommentComment in serialization may be a limitation
  comments: T;

  constructor(name: string, parent: Model) {
    super(name, parent);
  }  

  getOrderedBaseTypes(map: ICodebaseMap): TypeDefinition[] {
    const types = new Array<TypeDefinition>()
    this.getNextBaseType(this.baseType, types, map)
    return types
  }

  getNextBaseType(id: string, types: TypeDefinition[], map: ICodebaseMap) {
    if (map.typeMap.has(id)) {
      const type = map.typeMap.get(id)
      types.push(type)
      this.getNextBaseType(type.parent, types, map)
    }  
  }
}
