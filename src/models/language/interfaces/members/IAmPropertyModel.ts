import IAmAccessibilityModel from "../IAmAccessibilityModel";
import IAmModel from "../IAmModel";
import IAmPolymorphicable from "../IAmPolymorphicable";
import IAmSingletonable from "../IAmSingletonable";
import IAmTypeModel from "../IAmTypeModel";

export default interface IAmPropertyModel 
  extends 
  IAmPolymorphicable, 
  IAmAccessibilityModel,
  IAmSingletonable,
  IAmModel {
  hasGetter: boolean;
  hasSetter: boolean;  
  isGetPublic: boolean;
  isSetPublic: boolean;
  isGetPrivate: boolean;
  isSetPrivate: boolean;   
  isGetProtected: boolean;
  isSetProtected: boolean;
  isGetInternal: boolean;
  isSetInternal: boolean;
  isVirtual: boolean;
  isAbstract: boolean;
  type: IAmTypeModel
}