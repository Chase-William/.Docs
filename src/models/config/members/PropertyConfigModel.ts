import { jsonMember, jsonObject } from "typedjson";
import MemberConfigModel from "./MemberConfigModel";

@jsonObject({ name: 'property' })
export default class PropertyConfigModel extends MemberConfigModel {
  @jsonMember(Boolean)
  denoteIfReadonly: boolean
  @jsonMember(Boolean)
  denoteIfSetonly: boolean

  apply(config: PropertyConfigModel): void {
    super.apply(config)
    if (super.check(this.denoteIfReadonly, config.denoteIfReadonly))
      this.denoteIfReadonly = config.denoteIfReadonly
    if (super.check(this.denoteIfSetonly, config.denoteIfSetonly))
      this.denoteIfSetonly = config.denoteIfSetonly
  }
}