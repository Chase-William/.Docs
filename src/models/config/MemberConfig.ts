import { jsonMember, jsonObject } from "typedjson";
import EventConfigModel from "./members/EventConfigModel";
import FieldConfigModel from "./members/FieldConfigModel";
import MethodConfigModel from "./members/MethodConfigModel";
import PropertyConfigModel from "./members/PropertyConfigModel";

@jsonObject({ name: 'member' })
export default class MemberConfig {
  @jsonMember(PropertyConfigModel)
  property: PropertyConfigModel
  @jsonMember(FieldConfigModel)
  field: FieldConfigModel
  @jsonMember(MethodConfigModel)
  method: MethodConfigModel
  @jsonMember(EventConfigModel)
  event: EventConfigModel

  apply(config: MemberConfig): void {
    if (config.property)
      this.property.apply(config.property)
    if (config.field)
      this.field.apply(config.field)
    if (config.method)
      this.method.apply(config.method)
    if (config.event)
      this.event.apply(config.event)
  }
}