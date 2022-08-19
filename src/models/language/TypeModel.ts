import { jsonArrayMember, jsonMember, jsonObject } from "typedjson";
import EventModel from "./members/EventModel";
import FieldModel from "./members/FieldModel";
import MethodModel from "./members/MethodModel";
import PropertyModel from "./members/PropertyModel";
import CommonComment from "../written/CommonComment";
import IAmTypeModel from "./interfaces/IAmTypeModel";
import AccessibilityModel from "./AccessibilityModel";
import AssemblyModel from "../AssemblyModel";
import IAmProjectManager from "../../ProjectManager";

@jsonObject()
export default class TypeModel
  extends AccessibilityModel 
  implements IAmTypeModel {

  @jsonMember(String, { name: 'BaseType' })
  _baseType: string = null
  baseType: IAmTypeModel

  @jsonMember(String, { name: 'Namespace' })
  namespace: string = null

  @jsonMember(String, { name: 'Name' })
  name: string

  @jsonMember(String, { name: 'FullName' })
  fullName: string = null

  @jsonMember(CommonComment, { name: 'Comments' })
  comments: CommonComment

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
}