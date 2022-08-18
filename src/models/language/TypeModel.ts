import { jsonArrayMember, jsonMember, jsonObject } from "typedjson";
import EventModel from "./members/EventModel";
import FieldModel from "./members/FieldModel";
import MethodModel from "./members/MethodModel";
import PropertyModel from "./members/PropertyModel";
import CommonComment from "../written/CommonComment";
import IAmTypeModel from "../interfaces/IAmTypeModel";
import AccessibilityModel from "./AccessibilityModel";
import IHaveEvents from "../interfaces/IHaveEvents";
import IHaveMethods from "../interfaces/IHaveMethods";

@jsonObject()
export default class TypeModel 
  extends AccessibilityModel 
  implements IAmTypeModel {
    
  @jsonMember(String, { name: 'BaseType' })
  baseType: string = null

  @jsonMember(String, { name: 'Namespace' })
  namespace: string = null

  @jsonMember(String, { name: 'Name' })
  name: string

  @jsonMember(String, { name: 'FullName' })
  fullName: string = null

  @jsonMember(CommonComment, { name: 'Comments' })
  comments: CommonComment

  @jsonMember(String, { name: 'AssemblyName' })
  assemblyName: string

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
}