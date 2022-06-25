import Model from "../models/Model"
import Nestable from "../models/Nestable"
import ClassModel from "../models/types/ClassModel"
import DelegateModel from "../models/types/DelegateModel"
import EnumModel from "../models/types/EnumModel"
import InterfaceModel from "../models/types/InterfaceModel"
import StructModel from "../models/types/StructModel"
import TypeModel from "../models/types/TypeModel"

export default interface Renderer {
  useDefaultFileStructure: boolean
  path: string
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

