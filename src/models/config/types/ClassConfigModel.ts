import { jsonMember, jsonObject } from "typedjson";
import ConfigModel, { check } from "../ConfigModel";
import PolymorphicConfigable, { applyPolymorphic } from "../interfaces/PolymorphicConfigable";

@jsonObject({ name: 'class' })
export default class ClassConfigModel extends ConfigModel implements PolymorphicConfigable {
  @jsonMember(Boolean)
  denoteIfStatic: boolean
  @jsonMember(Boolean)
  denoteIfVirtual: boolean
  @jsonMember(Boolean)
  denoteIfAbstract: boolean

  apply(config: ClassConfigModel): void {
    super.apply(config)
    if (check(this.denoteIfStatic, config.denoteIfStatic))
      this.denoteIfStatic = config.denoteIfStatic
    applyPolymorphic(this, config) 
  }
}