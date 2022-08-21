import CommonComment from "../../../comments/CommonComment";
import IAmAccessibilityModel from "../IAmAccessibilityModel";
import IAmModel from "../IAmModel";
import IAmPolymorphicable from "../IAmPolymorphicable";
import IAmSingletonable from "../IAmSingletonable";
import IAmMemberModel from "./IAmMemberModel";

export default interface IAmEventModel 
  extends 
  IAmPolymorphicable, 
  IAmAccessibilityModel,
  IAmSingletonable,
  IAmMemberModel,
  IAmModel {
    comments: CommonComment | null
}