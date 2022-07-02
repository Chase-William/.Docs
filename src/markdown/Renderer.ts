import Configuration from "../models/config/Configuration"
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

  renderClass(model: ClassModel): void
  renderDelegate(model: DelegateModel): void
  renderEnum(model: EnumModel): void
  renderInterface(model: InterfaceModel): void
  renderStruct(model: StructModel): void
}

