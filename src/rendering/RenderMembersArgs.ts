import Configuration from "../models/config/Configuration";
import EventConfigModel from "../models/config/members/EventConfigModel";
import FieldConfigModel from "../models/config/members/FieldConfigModel";
import MemberConfigModel from "../models/config/members/MemberConfigModel";
import MethodConfigModel from "../models/config/members/MethodConfigModel";
import PropertyConfigModel from "../models/config/members/PropertyConfigModel";
import ClassConfigModel from "../models/config/types/ClassConfigModel";
import DelegateConfigModel from "../models/config/types/DelegateConfigModel";
import EnumConfigModel from "../models/config/types/EnumConfigModel";
import InterfaceConfigModel from "../models/config/types/InterfaceConfigModel";
import StructConfigModel from "../models/config/types/StructConfigModel";
import IAmEventModel from "../models/language/interfaces/members/IAmEventModel";
import IAmFieldModel from "../models/language/interfaces/members/IAmFieldModel";
import IAmMethodModel from "../models/language/interfaces/members/IAmMethodModel";
import IAmPropertyModel from "../models/language/interfaces/members/IAmPropertyModel";
import IAmSlicedTypeModel from "../models/language/interfaces/types/IAmSlicedTypeModel";
import RenderTypeArgs, { TYPE_CONFIGURATIONS_DEF } from "./RenderTypeArgs";

export type MEMBER_CONFIGURATIONS_DEF = EventConfigModel | FieldConfigModel | PropertyConfigModel | MethodConfigModel
export type MEMBER_TYPES_DEF = IAmEventModel | IAmFieldModel | IAmMethodModel | IAmPropertyModel

export default class RenderMembersArgs<
  T1 extends IAmSlicedTypeModel, 
  T2 extends MEMBER_TYPES_DEF,
  T3 extends MEMBER_CONFIGURATIONS_DEF
  > {
  parent: T1
  members: T2[]
  config: T3
  more: RenderTypeArgs<TYPE_CONFIGURATIONS_DEF>
}