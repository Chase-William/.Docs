import Configuration from "../models/config/Configuration"
import PropertyConfigModel from "../models/config/members/PropertyConfigModel"
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
  path: string
  config: Configuration
  // render<T extends ClassModel |DelegateModel | EnumModel | InterfaceModel | StructModel>(model: T): string

  // renderEvent(model: EventModel): string
  // renderField(model: FieldModel): string
  // renderMethod(model: MethodModel): string
  // renderProperty(model: PropertyModel): string

  beginRenderingClass(model: ClassModel, filePath: string): void
  beginRenderingDelegate(model: DelegateModel, filePath: string): void
  beginRenderingEnum(model: EnumModel, filePath: string): void
  beginRenderingInterface(model: InterfaceModel, filePath: string): void
  beginRenderingStruct(model: StructModel, filePath: string): void

  beginRenderingProperties(): void
  renderProperty(property: PropertyModel): void
  endRenderingProperties(): void

  beginRenderingMethods(): void
  renderMethod(method: MethodModel): void
  endRenderingMethods(): void

  beginRenderingEvents(): void
  renderEvent(event: EventModel): void
  endRenderingEvents(): void

  beginRenderingFields(): void
  renderField(field: FieldModel): void
  endRenderingFields(): void

  endRenderingClass(model: ClassModel, filePath: string): void
  endRenderingDelegate(model: DelegateModel, filePath: string): void
  endRenderingEnum(model: EnumModel, filePath: string): void
  endRenderingInterface(model: InterfaceModel, filePath: string): void
  endRenderingStruct(model: StructModel, filePath: string): void
}