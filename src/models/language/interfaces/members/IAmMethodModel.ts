import MethodComment from "../../../written/MethodComment";
import IAmAccessibilityModel from "../IAmAccessibilityModel";
import IAmModel from "../IAmModel";
import IAmPolymorphicable from "../IAmPolymorphicable";
import IAmSingletonable from "../IAmSingletonable";
import IHaveSignature from "../IHaveSignature";

export default interface IAmMethodModel 
  extends 
  IAmPolymorphicable,
  IAmAccessibilityModel,
  IAmSingletonable,
  IHaveSignature,
  IAmModel {
  comments: MethodComment | null
}