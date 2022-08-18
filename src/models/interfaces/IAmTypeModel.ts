import CommonComment from "../written/CommonComment"
import IAmAccessibilityModel from "./IAmAccessibilityModel"
import IAmEventModel from "./IAmEventModel"
import IAmFieldModel from "./IAmFieldModel"
import IAmMethodModel from "./IAmMethodModel"
import IAmPropertyModel from "./IAmPropertyModel"

/**
 * An interface that exposes the useable members of the TypeModel class.
 */
export default interface IAmTypeModel extends IAmAccessibilityModel {
  baseType: string
  namespace: string
  name: string
  fullName: string
  comments: CommonComment
  assemblyName: string
  isClass: boolean
  isInterface: boolean
  isValueType: boolean
  isEnum: boolean
  isDelegate: boolean
  events: IAmEventModel[]
  fields: IAmFieldModel[]
  properties: IAmPropertyModel[]
  methods: IAmMethodModel[]
  genericTypeArguments: IAmTypeModel[]
  genericTypeParameters: IAmTypeModel[]
  isConstructedGenericType: boolean
  isGenericType: boolean
  isGenericParameter: boolean
  metadataToken: number
  id: string
}