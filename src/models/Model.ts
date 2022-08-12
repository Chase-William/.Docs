import { jsonMember, jsonObject } from "typedjson";
import IHaveNestableTypes from "./interfaces/IHaveNestableTypes";
import IAmRenderable from "./interfaces/IAmRenderable";
import Namespace from "./Namespace";

export const CLASS_TYPE_CODE = 'class'
export const INTERFACE_TYPE_CODE = 'interface'
export const DELEGATE_TYPE_CODE = 'delegate'
export const STRUCT_TYPE_CODE = 'struct'
export const ENUM_TYPE_CODE = 'enum'
export const NAMESPACE_TYPE_CODE = 'namespace'

@jsonObject()
export default class Model {
  parent: Model | null

  /**
   * Used in the json to identify the object's type.
   */
  @jsonMember(String, { name: 'Type' })
  type: string

  @jsonMember(String, { name: 'Name' })
  name: string  

  constructor(name: string, parent: Model | null) {
    this.name = name;
    this.parent = parent;    
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

function getPath(model: Model, namespaceDelimiter: string) {
  let namespace = ''
  let current = model.parent
  while (current) {
    if (current instanceof Namespace) { // . seperation for namespaces
      namespace = current.name + namespaceDelimiter + namespace
    } else { // + seperation for types
      namespace = current.name + '+' + namespace
    }
    // Update for next interation
    current = current.parent
  }
  return namespace
}