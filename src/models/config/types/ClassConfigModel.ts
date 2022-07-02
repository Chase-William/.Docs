import { jsonMember, jsonObject } from "typedjson";
import ConfigModel from "../ConfigModel";

@jsonObject({ name: 'class' })
export default class ClassConfigModel extends ConfigModel {
  @jsonMember(Boolean)
  denoteIfStatic: boolean
  @jsonMember(Boolean)
  denoteIfVirtual: boolean
  @jsonMember(Boolean)
  denoteIfAbstract: boolean

  apply(config: ClassConfigModel): void {
    super.apply(config)
    if (super.check(this.denoteIfStatic, config.denoteIfStatic))
      this.denoteIfStatic = config.denoteIfStatic
    if (super.check(this.denoteIfVirtual, config.denoteIfVirtual))
      this.denoteIfVirtual = config.denoteIfVirtual
    if (super.check(this.denoteIfAbstract, config.denoteIfAbstract))
      this.denoteIfAbstract = config.denoteIfAbstract
  }
}