import { jsonMember, jsonObject } from "typedjson";
import { check } from "../ConfigModel";
import MemberConfigModel from "./MemberConfigModel";

@jsonObject({ name: 'field' })
export default class FieldConfigModel extends MemberConfigModel {
  @jsonMember(Boolean)
  denoteIfConst: boolean
  @jsonMember(Boolean)
  denoteIfReadonly: boolean

  apply(config: FieldConfigModel): void {
    super.apply(config)
    if (check(this.denoteIfConst, config.denoteIfConst))
      this.denoteIfConst = config.denoteIfConst
    if (check(this.denoteIfReadonly, config.denoteIfReadonly))
      this.denoteIfReadonly = config.denoteIfReadonly
  }
}