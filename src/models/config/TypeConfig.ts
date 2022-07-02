import { jsonMember, jsonObject } from "typedjson";
import ClassConfigModel from "./types/ClassConfigModel";
import DelegateConfigModel from "./types/DelegateConfigModel";
import EnumConfigModel from "./types/EnumConfigModel";
import InterfaceConfigModel from "./types/InterfaceConfigModel";
import StructConfigModel from "./types/StructConfigModel";

@jsonObject({ name: 'type' })
export default class TypeConfig {
  @jsonMember(ClassConfigModel)
  class: ClassConfigModel
  @jsonMember(InterfaceConfigModel)
  interface: InterfaceConfigModel
  @jsonMember(StructConfigModel)
  struct: StructConfigModel
  @jsonMember(EnumConfigModel)
  enum: EnumConfigModel
  @jsonMember(DelegateConfigModel)
  delegate: DelegateConfigModel
}