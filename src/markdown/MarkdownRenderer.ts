import { writeFileSync } from "fs";
import EventModel from "../models/members/EventModel";
import FieldModel from "../models/members/FieldModel";
import MethodModel from "../models/members/MethodModel";
import PropertyModel from "../models/members/PropertyModel";
import ClassModel from "../models/types/ClassModel";
import DelegateModel from "../models/types/DelegateModel";
import EnumModel from "../models/types/EnumModel";
import InterfaceModel from "../models/types/InterfaceModel";
import StructModel from "../models/types/StructModel";
import Renderer from "./Renderer";

export default class MarkdownRenderer implements Renderer {
  useDefaultFileStructure = true

  renderClass(model: ClassModel): void {
    console.log(`Rendering: ${model.fullName}`)
  }
  renderDelegate(model: DelegateModel): void {
    console.log(`Rendering: ${model.fullName}`)
  }
  renderEnum(model: EnumModel): void {
    console.log(`Rendering: ${model.fullName}`)
  }
  renderInterface(model: InterfaceModel): void {
    console.log(`Rendering: ${model.fullName}`)
  }
  renderStruct(model: StructModel): void {
    console.log(`Rendering: ${model.fullName}`)
  }    
}