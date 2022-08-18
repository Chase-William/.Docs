import IAmAccessibilityModel from "./IAmAccessibilityModel";
import IAmPolymorphicable from "./IAmPolymorphicable";
import IAmSingletonable from "./IAmSingletonable";

export default interface IAmPropertyModel 
  extends 
  IAmPolymorphicable, 
  IAmAccessibilityModel,
  IAmSingletonable {
  
}