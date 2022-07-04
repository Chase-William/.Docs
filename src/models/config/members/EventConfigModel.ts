import { jsonMember, jsonObject } from "typedjson";
import PolymorphicConfigable, { applyPolymorphic } from "../interfaces/PolymorphicConfigable";
import MemberConfigModel from "./MemberConfigModel";

@jsonObject({ name: 'event' })
export default class EventConfigModel extends MemberConfigModel implements PolymorphicConfigable {
  @jsonMember(Boolean)
  denoteIfVirtual: boolean
  @jsonMember(Boolean)
  denoteIfAbstract: boolean

  apply(config: EventConfigModel): void {
    super.apply(config)
    applyPolymorphic(this, config)    
  }
}