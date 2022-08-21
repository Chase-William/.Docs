import CommonComment from "../../../comments/CommonComment";
import IAmAccessibilityModel from "../IAmAccessibilityModel";
import IAmModel from "../IAmModel";
import IAmSingletonable from "../IAmSingletonable";
import IAmSlicedTypeModel from "../types/IAmSlicedTypeModel";

export default interface IAmFieldModel
  extends 
  IAmAccessibilityModel,
  IAmSingletonable,
  IAmModel {
  isReadonly: boolean
  isLiteral: boolean
  rawConstantValue: unknown
  type: IAmSlicedTypeModel
  comments: CommonComment | null
}