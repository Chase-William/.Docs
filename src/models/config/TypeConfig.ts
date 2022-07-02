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

  apply(config: TypeConfig): void {
    // Incoming config from user may have undefined props
    if (config.class)
      this.class.apply(config.class)
    if (config.interface)
      this.interface.apply(config.interface)
    if (config.struct)
      this.struct.apply(config.struct)
    if (config.enum)
      this.enum.apply(config.enum)
    if (config.delegate)
      this.delegate.apply(config.delegate)
  }
}