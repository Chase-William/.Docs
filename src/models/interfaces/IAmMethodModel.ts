import IAmAccessibilityModel from "./IAmAccessibilityModel";
import IAmPolymorphicable from "./IAmPolymorphicable";
import IAmSingletonable from "./IAmSingletonable";
import IHaveSignature from "./IHaveSignature";

export default interface IAmMethodModel 
  extends 
  IAmPolymorphicable,
  IAmAccessibilityModel,
  IAmSingletonable,
  IHaveSignature {
  
}