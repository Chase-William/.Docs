import Configuration from "../models/config/Configuration";
import MemberConfigModel from "../models/config/members/MemberConfigModel";
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
import RenderTypeArgs from "./RenderTypeArgs";

export default class RenderMembersArgs<
  T1 extends IAmSlicedTypeModel, 
  T2 extends IAmEventModel | IAmFieldModel | IAmMethodModel | IAmPropertyModel,
  T3 extends MemberConfigModel
  > {
  parent: T1
  members: T2[]
  config: T3
  more: RenderTypeArgs<never>
}