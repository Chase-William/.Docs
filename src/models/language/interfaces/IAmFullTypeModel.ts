import AssemblyModel from "../../AssemblyModel"
import CommonComment from "../../comments/CommonComment"
import IAmAccessibilityModel from "./IAmAccessibilityModel"
import IAmEventModel from "./members/IAmEventModel"
import IAmModel from "./IAmModel"
import IAmFieldModel from "./members/IAmFieldModel"
import IAmPropertyModel from "./members/IAmPropertyModel"
import IAmMethodModel from "./members/IAmMethodModel"
import IAmSlicedTypeModel from "./types/IAmSlicedTypeModel"

/**
 * An interface that exposes the useable members of the TypeModel class.
 */
export default interface IAmFullTypeModel extends IAmSlicedTypeModel {
  isClass: boolean
  isInterface: boolean
  isValueType: boolean
  isEnum: boolean
  isDelegate: boolean
  events: IAmEventModel[]
  fields: IAmFieldModel[]
  properties: IAmPropertyModel[]
  methods: IAmMethodModel[]  
}