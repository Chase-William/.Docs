import { jsonMember, jsonObject } from "typedjson";

export const CLASS_TYPE_CODE = 'class'
export const INTERFACE_TYPE_CODE = 'interface'
export const DELEGATE_TYPE_CODE = 'delegate'
export const STRUCT_TYPE_CODE = 'struct'
export const ENUM_TYPE_CODE = 'enum'
export const NAMESPACE_TYPE_CODE = 'namespace'

@jsonObject()
export default class Model {
  parent: Model | null  

  @jsonMember(String, { name: 'Name' })
  name: string

  constructor(name: string, parent: Model | null) {
    this.name = name;
    this.parent = parent;    
  }  
}