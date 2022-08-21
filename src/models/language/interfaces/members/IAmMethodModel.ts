import MethodComment from "../../../comments/MethodComment";
import IAmAccessibilityModel from "../IAmAccessibilityModel";
import IAmModel from "../IAmModel";
import IAmPolymorphicable from "../IAmPolymorphicable";
import IAmSingletonable from "../IAmSingletonable";
import IHaveSignature from "../IHaveSignature";
import IAmMemberModel from "./IAmMemberModel";

export default interface IAmMethodModel 
  extends 
  IAmPolymorphicable,
  IAmAccessibilityModel,
  IAmSingletonable,
  IHaveSignature,
  IAmMemberModel,
  IAmModel {
  comments: MethodComment | null
}