import ConfigModel from "../models/config/ConfigModel"
import Configuration from "../models/config/Configuration"
import EventConfigModel from "../models/config/members/EventConfigModel"
import FieldConfigModel from "../models/config/members/FieldConfigModel"
import MethodConfigModel from "../models/config/members/MethodConfigModel"
import PropertyConfigModel from "../models/config/members/PropertyConfigModel"
import ClassConfigModel from "../models/config/types/ClassConfigModel"
import DelegateConfigModel from "../models/config/types/DelegateConfigModel"
import EnumConfigModel from "../models/config/types/EnumConfigModel"
import InterfaceConfigModel from "../models/config/types/InterfaceConfigModel"
import StructConfigModel from "../models/config/types/StructConfigModel"
import ICodebaseMap from "../models/global/ICodebaseMap";
import EventModel from "../models/members/EventModel"
import FieldModel from "../models/members/FieldModel"
import MethodModel from "../models/members/MethodModel"
import PropertyModel from "../models/members/PropertyModel"
import ClassModel from "../models/types/ClassModel"
import DelegateModel from "../models/types/DelegateModel"
import EnumModel from "../models/types/EnumModel"
import InterfaceModel from "../models/types/InterfaceModel"
import StructModel from "../models/types/StructModel"

export default interface Renderer {
  // render<T extends ClassModel |DelegateModel | EnumModel | InterfaceModel | StructModel>(model: T): string

  // renderEvent(model: EventModel): string
  // renderField(model: FieldModel): string
  // renderMethod(model: MethodModel): string
  // renderProperty(model: PropertyModel): string

  beginRenderingClass(model: ClassModel, config: ClassConfigModel, map: ICodebaseMap): void
  beginRenderingDelegate(model: DelegateModel, config: DelegateConfigModel, map: ICodebaseMap): void
  beginRenderingEnum(model: EnumModel, config: EnumConfigModel, map: ICodebaseMap): void
  beginRenderingInterface(model: InterfaceModel, config: InterfaceConfigModel, map: ICodebaseMap): void
  beginRenderingStruct(model: StructModel, config: StructConfigModel, map: ICodebaseMap): void

  //beginRenderingProperties(): void
  renderProperties(accessibility: string, properties: PropertyModel[], config: PropertyConfigModel, map: ICodebaseMap): void
  //endRenderingProperties(): void

  //beginRenderingMethods(): void
  renderMethods(accessibility: string, methods: MethodModel[], config: MethodConfigModel, map: ICodebaseMap): void
  //endRenderingMethods(): void

  //beginRenderingEvents(): void
  renderEvents(accessibility: string, events: EventModel[], config: EventConfigModel, map: ICodebaseMap): void
  //endRenderingEvents(): void

  //beginRenderingFields(): void
  renderFields(accessibility: string, fields: FieldModel[], config: FieldConfigModel, map: ICodebaseMap): void
  //endRenderingFields(): void

  renderValues(model: EnumModel, values: FieldModel[]): void

  endRenderingClass(model: ClassModel, filePath: string, config: ClassConfigModel, map: ICodebaseMap): void
  endRenderingDelegate(model: DelegateModel, filePath: string, config: DelegateConfigModel, map: ICodebaseMap): void
  endRenderingEnum(model: EnumModel, filePath: string, config: EnumConfigModel, map: ICodebaseMap): void
  endRenderingInterface(model: InterfaceModel, filePath: string, config: InterfaceConfigModel, map: ICodebaseMap): void
  endRenderingStruct(model: StructModel, filePath: string, config: StructConfigModel, map: ICodebaseMap): void
}