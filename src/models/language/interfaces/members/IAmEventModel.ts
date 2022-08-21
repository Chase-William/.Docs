import CommonComment from "../../../comments/CommonComment";
import IAmAccessibilityModel from "../IAmAccessibilityModel";
import IAmModel from "../IAmModel";
import IAmPolymorphicable from "../IAmPolymorphicable";
import IAmSingletonable from "../IAmSingletonable";

export default interface IAmEventModel 
  extends 
  IAmPolymorphicable, 
  IAmAccessibilityModel,
  IAmSingletonable,
  IAmModel {
    comments: CommonComment | null
}