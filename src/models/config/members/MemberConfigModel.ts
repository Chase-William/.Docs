import { jsonMember, jsonObject } from "typedjson";
import ConfigModel from "../ConfigModel";

@jsonObject
export default class MemberConfigModel extends ConfigModel {
  @jsonMember(Boolean)
  denoteIfStatic: boolean

  apply(config: MemberConfigModel): void {
    super.apply(config)
    if (super.check(this.denoteIfStatic, config.denoteIfStatic))
      this.denoteIfStatic = config.denoteIfStatic
  }
}