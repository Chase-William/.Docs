import CommonComment from "../../../comments/CommonComment";
import IAmAccessibilityModel from "../IAmAccessibilityModel";
import IAmModel from "../IAmModel";
import IAmPolymorphicable from "../IAmPolymorphicable";
import IAmSingletonable from "../IAmSingletonable";
import IAmMemberModel from "./IAmMemberModel";
import IAmSlicedTypeModel from "../types/IAmSlicedTypeModel";

export default interface IAmPropertyModel 
  extends 
  IAmPolymorphicable, 
  IAmAccessibilityModel,
  IAmSingletonable,
  IAmMemberModel,
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
  type: IAmSlicedTypeModel
  comments: CommonComment | null;
}