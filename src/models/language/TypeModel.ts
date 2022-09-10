import { jsonArrayMember, jsonMember, jsonObject } from "typedjson";
import EventModel from "./members/EventModel";
import FieldModel from "./members/FieldModel";
import MethodModel from "./members/MethodModel";
import PropertyModel from "./members/PropertyModel";
import CommonComment from "../comments/CommonComment";
import IAmFullTypeModel from "./interfaces/IAmFullTypeModel";
import AccessibilityModel from "./AccessibilityModel";
import AssemblyModel from "../AssemblyModel";
import IAmProjectManager from "../../ProjectManager";
import IAmSlicedTypeModel from "./interfaces/types/IAmSlicedTypeModel";
import path = require("path");
import TypeLink from "../../renderer/TypeLink";
import TypeComment from "../comments/TypeComments";

@jsonObject()
export default class TypeModel
  extends AccessibilityModel 
  implements IAmFullTypeModel {

  @jsonMember(String, { name: 'BaseType' })
  _baseType: string = null
  baseType: IAmFullTypeModel | null = null

  @jsonMember(String, { name: 'Namespace' })
  namespace: string = null

  @jsonMember(String, { name: 'Name' })
  name: string

  @jsonMember(String, { name: 'FullName' })
  fullName: string | null = null

  @jsonMember(CommonComment, { name: 'Comments' })
  comments: TypeComment | null = null

  @jsonMember(String, { name: 'AssemblyId' })
  _assemblyId: string
  assembly: AssemblyModel

  @jsonMember(Boolean, { name: 'IsClass' })
  isClass: boolean

  @jsonMember(Boolean, { name: 'IsInterface' })
  isInterface: boolean

  @jsonMember(Boolean, { name: 'IsValueType' })
  isValueType: boolean

  @jsonMember(Boolean, { name: 'IsEnum' })
  isEnum: boolean

  @jsonMember(Boolean, { name: 'IsDelegate' })
  isDelegate: boolean

  @jsonArrayMember(EventModel, { name: 'Events' })
  events: EventModel[]

  @jsonArrayMember(FieldModel, { name: 'Fields' })
  fields: FieldModel[]

  @jsonArrayMember(PropertyModel, { name: 'Properties' })
  properties: PropertyModel[]

  @jsonArrayMember(MethodModel, { name: 'Methods' })
  methods: MethodModel[]

  @jsonArrayMember(String, { name: 'GenericTypeArguments' })
  _genericTypeArguments: string[]
  genericTypeArguments: IAmFullTypeModel[]
  
  @jsonArrayMember(String, { name: 'GenericTypeParameters' })
  _genericTypeParameters: string[]
  genericTypeParameters: IAmFullTypeModel[]

  @jsonMember(Boolean, { name: 'IsConstructedGenericType' })
  isConstructedGenericType: boolean

  @jsonMember(Boolean, { name: 'IsGenericType' })
  isGenericType: boolean

  @jsonMember(Boolean, { name: 'IsGenericParameter' })
  isGenericParameter: boolean
  
  @jsonMember(Number, { name: 'MetadataToken' })
  metadataToken: number

  @jsonMember(String, { name: 'Id' })
  id: string

  @jsonMember(String, { name: 'ElementTypeId' })
  _elementTypeId: string | null = null
  elementType: IAmFullTypeModel | null = null

  @jsonArrayMember(String, { name: 'InterfaceIds' })
  _interfaces: string[] | null = null
  interfaces: IAmFullTypeModel[] = Array<IAmFullTypeModel>()

  @jsonMember(Boolean, { name: 'IsArray' })
  isArray: boolean

  @jsonMember(Boolean, { name: 'IsByRef' })
  isByRef: boolean

  isFacade(): boolean {
    return !this.assembly.project
  }

  /**
   * Denotes whether this type has it's own rendered output file. This means that this method
   * will return false for constructed types and array types.
   * @returns indication of this type is renderable (can have it's own file).
   */
  isRenderable(): boolean {
    return !(this.isFacade() || this.isArray || this.isByRef || this.isGenericParameter || this.isConstructedGenericType)
  }

  /**
   * Denotes whether this type is an array type and has an element type.
   * @returns false if the type is not an array or doesn't have a element type otherwise true.
   */
  isRenderableArrayType(): boolean {
    return this.isArray ? !!this.elementType : false
  }

  bind(projManager: IAmProjectManager): void {
    // Bind to baseType
    if (this._baseType)
      this.baseType = projManager.getTypeChecked(this._baseType)
    // Bind type arguments
    this.genericTypeArguments = this._genericTypeArguments.map(id => projManager.getTypeChecked(id))
    // Bind type parameters
    this.genericTypeParameters = this._genericTypeParameters.map(id => projManager.getTypeChecked(id))
    // Bind Members
    this.events.forEach(event => event.bind(projManager))
    this.fields.forEach(field => field.bind(projManager))
    this.properties.forEach(property => property.bind(projManager))
    this.methods.forEach(method => method.bind(projManager))
    // Bind to assembly
    // console.log(this.fullName + " -> " + this._assemblyId)
    this.assembly = projManager.getAssemblyChecked(this._assemblyId)
    // Bind element type if exists
    if (this._elementTypeId) 
      this.elementType = projManager.getTypeChecked(this._elementTypeId)
    // Bind implemented interfaces
    if (this._interfaces)
      for (const id of this._interfaces)
        this.interfaces.push(projManager.getTypeChecked(id))
    // if (this.interfaces.length > 0)
    // {
    //   console.log(this.name)
    //   for (const inter of this.interfaces)
    //     console.log('\t' + inter.name)
    // }   
  }

  /**
   * Gets all baseTypes and puts them in a ascending order where index 0 is the first parent.
   * @returns A collection of all parents in ascending order.
   */
  getBaseTypes(): IAmSlicedTypeModel[] {
    const baseTypes = new Array<IAmSlicedTypeModel>()
    let current = this.baseType
    while (current) {
      baseTypes.push(current)
      current = current.baseType
    }
    return baseTypes
  }

  /**
   * Gets the name of the type without the generics counter. For example, 
   * "`2" is omitted from the type name.
   * @returns The name of the type without the grave accent and generics count.
   */
  getName(): string {
    const indexOfGraveAccent = this.name.indexOf('`')
    // Omit the generics counter like "`2" from the name
    return indexOfGraveAccent > 0 ? this.name.slice(0, indexOfGraveAccent) : this.name
  }

  getNameWithGenerics(to: IAmSlicedTypeModel, fileEx: string): { root: TypeLink, generics: TypeLink[] } {
    const root = new TypeLink(this, to, fileEx)
    const generics = new Array<TypeLink>()
    to.genericTypeArguments.forEach(arg => generics.push(this.getTypeLinkToOther(arg, fileEx)))
    to.genericTypeParameters.forEach(param => generics.push(this.getTypeLinkToOther(param, fileEx)))        
    return {
      root: root,
      generics: generics
    }
  }

  getTypeLinkToOther(to: IAmSlicedTypeModel, fileEx: string): TypeLink {
    return new TypeLink(this, to, fileEx)
  }

  /**
   * Gets the relative path from the current to the target type. This is useful
   * for creating hyper-links to another type.
   * @param to Target type to route to.
   * @param fileEx The file extension of the target type's file.
   * @returns A complete relative path to the target type.
   */
  getFilePathToOther: (to: IAmSlicedTypeModel, fileEx: string) => string = (to, fileEx) => {
    const from = this.getDirectory()
    const _to = to.getDirectory()
    // Resolve the relative path and ensure the file ends with a .<file extension>
    return path.join(path.relative(from, _to), to.getFileNameWithEx(fileEx))
  }
  
  getFilePathWithEx(fileEx: string): string {
    return path.join(this.getDirectory(), this.getFileNameWithEx(fileEx))
  }  

  getFileNameWithEx(fileEx: string): string {
    return this.getName().concat(fileEx.charAt(0) == '.' ? fileEx : '.'.concat(fileEx))
  }

  getDirectory(): string {
    return this.namespace.split('.').join('/')
  }
}