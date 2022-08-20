import { jsonArrayMember, jsonMember, jsonObject, Typelike } from "typedjson";
import EventModel from "./members/EventModel";
import FieldModel from "./members/FieldModel";
import MethodModel from "./members/MethodModel";
import PropertyModel from "./members/PropertyModel";
import CommonComment from "../written/CommonComment";
import IAmFullTypeModel from "./interfaces/IAmFullTypeModel";
import AccessibilityModel from "./AccessibilityModel";
import AssemblyModel from "../AssemblyModel";
import IAmProjectManager from "../../ProjectManager";
import IAmSlicedTypeModel from "./interfaces/types/IAmSlicedTypeModel";
import path = require("path");
import TypeLink from "../../renderer/TypeLink";

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
  fullName: string = null

  @jsonMember(CommonComment, { name: 'Comments' })
  comments: CommonComment | null = null

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

  @jsonMember(Boolean, { name: 'IsArray' })
  isArray: boolean

  @jsonMember(Boolean, { name: 'IsByRef' })
  isByRef: boolean

  isFacade(): boolean {
    if (!this.assembly)
      console.log(this.fullName)
    return this.assembly.project == null
  }

  /**
   * Denotes whether this type has it's own rendered output file.
   * @returns indication of this type is renderable (can have it's own file).
   */
  isRenderable(): boolean {
    return !(this.isFacade() || this.isArray || this.isByRef || this.isGenericParameter || this.isConstructedGenericType)
  }

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
    // console.log(this.fullName + " -> " + this._assemblyId)
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

  getNameWithGenerics(constructableType: IAmSlicedTypeModel, fileEx: string): { root: TypeLink, generics: TypeLink[] } {
    const root = new TypeLink(this, constructableType, null, fileEx)
    const generics = new Array<TypeLink>()
    constructableType.genericTypeArguments.forEach(arg => generics.push(this.getTypeLinkToOther(constructableType, arg, fileEx)))
    constructableType.genericTypeParameters.forEach(param => generics.push(this.getTypeLinkToOther(constructableType, param, fileEx)))        
    return {
      root: root,
      generics: generics
    }
  }

  getTypeLinkToOther(foundationalType: IAmSlicedTypeModel, targetType: IAmSlicedTypeModel, fileEx: string): TypeLink {
    return new TypeLink(this, foundationalType, targetType, fileEx)
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