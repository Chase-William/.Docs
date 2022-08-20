import { jsonArrayMember, jsonMember, jsonObject, Typelike } from "typedjson";
import EventModel from "./members/EventModel";
import FieldModel from "./members/FieldModel";
import MethodModel from "./members/MethodModel";
import PropertyModel from "./members/PropertyModel";
import CommonComment from "../written/CommonComment";
import IAmTypeModel from "./interfaces/IAmFullTypeModel";
import AccessibilityModel from "./AccessibilityModel";
import AssemblyModel from "../AssemblyModel";
import IAmProjectManager from "../../ProjectManager";
import IAmSlicedTypeModel from "./interfaces/types/IAmSlicedTypeModel";
import path = require("path");
import TypeLink from "../../renderer/TypeLink";

@jsonObject()
export default class TypeModel
  extends AccessibilityModel 
  implements IAmTypeModel {

  @jsonMember(String, { name: 'BaseType' })
  _baseType: string = null
  baseType: IAmTypeModel | null = null

  @jsonMember(String, { name: 'Namespace' })
  namespace: string = null

  @jsonMember(String, { name: 'Name' })
  name: string

  @jsonMember(String, { name: 'FullName' })
  fullName: string = null

  @jsonMember(CommonComment, { name: 'Comments' })
  comments: CommonComment | null = null

  @jsonMember(String, { name: 'AssemblyName' })
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
  genericTypeArguments: IAmTypeModel[]
  
  @jsonArrayMember(String, { name: 'GenericTypeParameters' })
  _genericTypeParameters: string[]
  genericTypeParameters: IAmTypeModel[]

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

  @jsonMember(Boolean, { name: 'IsFacade' })
  isFacade: boolean

  bind(projManager: IAmProjectManager): void {
    // Bind to baseType
    this.baseType = projManager.types.get(this._baseType)
    // Bind type arguments
    this.genericTypeArguments = this._genericTypeArguments.map(id => projManager.types.get(id))
    // Bind type parameters
    this.genericTypeParameters = this._genericTypeParameters.map(id => projManager.types.get(id))
    // Bind Members
    this.events.forEach(event => event.bind(projManager.types))
    this.fields.forEach(field => field.bind(projManager.types))
    this.properties.forEach(property => property.bind(projManager.types))
    this.methods.forEach(method => method.bind(projManager.types))
    // Bind to assembly
    this.assembly = projManager.assemblies.get(this._assemblyId)
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

  getNameWithGenerics(fileEx: string): { root: TypeLink, generics: TypeLink[] } {
    const root = new TypeLink(this.getName(), null, this.comments)
    const generics = new Array<TypeLink>()
    this.genericTypeArguments.forEach(arg => generics.push(this.getTypeLinkToOther(arg, fileEx)))
    this.genericTypeParameters.forEach(param => generics.push(this.getTypeLinkToOther(param, fileEx)))
    return {
      root: root,
      generics: generics
    }
  }

  getTypeLinkToOther(to: IAmSlicedTypeModel, fileEx: string): TypeLink {
    return new TypeLink(to.getName(), this.getFilePathToOther(to, fileEx), to.comments)
  }

  /**
   * Gets the relative path from the current to the target type. This is useful
   * for creating hyper-links to another type.
   * @param to Target type to route to.
   * @param fileEx The file extension of the target type's file.
   * @returns A complete relative path to the target type.
   */
  getFilePathToOther: (to: IAmSlicedTypeModel, fileEx: string) => string = (to, fileEx) => {
    const from = this.getFilePathWithEx(fileEx)
    const _to = to.getFilePathWithEx(fileEx)
    // Resolve the relative path and ensure the file ends with a .<file extension>
    return path.relative(from, _to)
  }

  getFilePathWithEx(fileEx: string): string {
    return this.getFilePath().concat(fileEx.charAt(0) == '.' ? fileEx : '.'.concat(fileEx))
  }

  /**
   * Gets the path with the current file's name included.
   * @returns A complete path using the namespace and type name.
   */
  getFilePath(): string {
    return this.getDirectory() + '/' + this.getName()
  }

  getDirectory(): string {
    return this.namespace.split('.').join('/')
  }
}