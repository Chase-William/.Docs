import { jsonMember, jsonObject } from 'typedjson';
import CommonComment from '../written/CommonComment';
import AccessibilityModel from '../AccessibilityModel';
import Model from '../Model';
import TypeDefinition from '../global/TypeDefinition';
import ICodebaseMap from '../global/ICodebaseMap';
import IAmBindable, { bindToCodebaseMapImplementation } from '../interfaces/IAmBindable';
import Namespace from '../Namespace';

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
export default class TypeModel<T extends CommonComment> extends AccessibilityModel implements IAmBindable {
  /**
   * Used in the json to identify the object's type.
   */
  @jsonMember(String, { name: 'Type' })
  type: string
  @jsonMember(String, { name: 'Namespace' })
  namespace: string;
  @jsonMember(String, { name: 'FullName' })
  fullName: string;
  @jsonMember(String, { name: 'Parent' })
  baseType: string;
  @jsonMember(CommonComment, { name: 'Comments' }) // CommentComment in serialization may be a limitation
  comments: T;

  /**
   * Set during the loading phase of the project and links this model to its global definition.
   */
  globalTypeDef: TypeDefinition

  bindToCodebaseMap(map: ICodebaseMap): void {
    // Link self
    bindToCodebaseMapImplementation(this, map)
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
      this.getNextBaseType(type.baseType, types, map)
    }  
  }

  getFilePath(): string {
    return getPath(this, '\\')
  }

  getDirectory(): string {
    let namespace = ''
    let current = this.parent
    while (current) {
      if (current instanceof Namespace) { // . seperation for namespaces
        namespace = current.name + '.' + namespace
      }
      // Update for next interation
      current = current.parent
    }
    return namespace
  }

  getNamespace(): string {
    return getPath(this, '.')
  }
}

function getPath(model: TypeModel<CommonComment>, namespaceDelimiter: string) {
  let namespace = ''
  let current = model.parent
  while (current) {
    /*
    I cannot use instanceof as importing Namespace in Model creates a circular dependency
    */
    if (current instanceof Namespace) { // . seperation for namespaces
      namespace = current.name + namespaceDelimiter + namespace
    } else { // + seperation for types
      if (!(current.parent instanceof Namespace))
        namespace = current.name + '+' + namespace
    }
    // Update for next interation
    current = current.parent
  }
  return namespace
}