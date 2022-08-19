import IAmEventModel from "../models/language/interfaces/members/IAmEventModel"
import IAmTypeModel from "../models/language/interfaces/IAmTypeModel"
import RenderMembersArgs from "./RenderMembersArgs"
import RenderTypeArgs from "./RenderTypeArgs"
import IAmClassModel from "../models/language/interfaces/types/IAmClassModel"
import IAmDelegateModel from "../models/language/interfaces/types/IAmDelegateModel"
import IAmEnumModel from "../models/language/interfaces/types/IAmEnumModel"
import IAmInterfaceModel from "../models/language/interfaces/types/IAmInterfaceModel"
import IAmStructModel from "../models/language/interfaces/types/IAmStructModel"
import PropertyConfigModel from "../models/config/members/PropertyConfigModel"
import MethodConfigModel from "../models/config/members/MethodConfigModel"
import EventConfigModel from "../models/config/members/EventConfigModel"
import FieldConfigModel from "../models/config/members/FieldConfigModel"
import IAmPropertyModel from "../models/language/interfaces/members/IAmPropertyModel"
import IAmMethodModel from "../models/language/interfaces/members/IAmMethodModel"
import IAmFieldModel from "../models/language/interfaces/members/IAmFieldModel"
import IAmSlicedTypeModel from "../models/language/interfaces/types/IAmSlicedTypeModel"

export default interface Renderer {
  beginRenderingClass(model: IAmClassModel, args: RenderTypeArgs): void
  beginRenderingDelegate(model: IAmDelegateModel, args: RenderTypeArgs): void
  beginRenderingEnum(model: IAmEnumModel, args: RenderTypeArgs): void
  beginRenderingInterface(model: IAmInterfaceModel, args: RenderTypeArgs): void
  beginRenderingStruct(model: IAmStructModel, args: RenderTypeArgs): void

  renderProperties(accessibility: string, args: RenderMembersArgs<IAmSlicedTypeModel, IAmPropertyModel, PropertyConfigModel>): void
  renderMethods(accessibility: string, args: RenderMembersArgs<IAmSlicedTypeModel, IAmMethodModel, MethodConfigModel>): void
  renderEvents(accessibility: string, args: RenderMembersArgs<IAmSlicedTypeModel, IAmEventModel, EventConfigModel>): void
  renderFields(accessibility: string, args: RenderMembersArgs<IAmSlicedTypeModel, IAmFieldModel, FieldConfigModel>): void
  renderValues(args: RenderMembersArgs<IAmEnumModel, IAmFieldModel, FieldConfigModel>): void

  endRenderingClass(model: IAmClassModel, args: RenderTypeArgs): void
  endRenderingDelegate(model: IAmDelegateModel, args: RenderTypeArgs): void
  endRenderingEnum(model: IAmEnumModel, args: RenderTypeArgs): void
  endRenderingInterface(model: IAmInterfaceModel, args: RenderTypeArgs): void
  endRenderingStruct(model: IAmStructModel, args: RenderTypeArgs): void
}