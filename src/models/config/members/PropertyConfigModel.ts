import { jsonMember, jsonObject } from "typedjson";
import PolymorphicConfigable from "../interfaces/PolymorphicConfigable";
import MemberConfigModel from "./MemberConfigModel";

@jsonObject({ name: 'property' })
export default class PropertyConfigModel extends MemberConfigModel implements PolymorphicConfigable {
  @jsonMember(Boolean)
  denoteIfReadonly: boolean
  @jsonMember(Boolean)
  denoteIfSetonly: boolean
  @jsonMember(Boolean)
  denoteIfVirtual: boolean
  @jsonMember(Boolean)
  denoteIfAbstract: boolean

  apply(config: PropertyConfigModel): void {
    super.apply(config)
    if (super.check(this.denoteIfReadonly, config.denoteIfReadonly))
      this.denoteIfReadonly = config.denoteIfReadonly
    if (super.check(this.denoteIfSetonly, config.denoteIfSetonly))
      this.denoteIfSetonly = config.denoteIfSetonly
  }
}