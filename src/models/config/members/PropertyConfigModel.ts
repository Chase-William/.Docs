import { jsonMember, jsonObject } from "typedjson";
import { check } from "../ConfigModel";
import PolymorphicConfigable, { applyPolymorphic } from "../interfaces/PolymorphicConfigable";
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

  @jsonMember(Boolean)
  denoteIfHasGetter: boolean
  @jsonMember(Boolean)
  denoteIfHasSetter: boolean
  @jsonMember(Boolean)
  denoteIfGetPublic: boolean
  @jsonMember(Boolean)
  denoteIfGetProtected: boolean
  @jsonMember(Boolean)
  denoteIfGetInternal: boolean
  @jsonMember(Boolean)
  denoteIfGetInternalProtected: boolean
  @jsonMember(Boolean)
  denoteIfGetPrivate: boolean
  @jsonMember(Boolean)
  denoteIfSetPublic: boolean
  @jsonMember(Boolean)
  denoteIfSetProtected: boolean
  @jsonMember(Boolean)
  denoteIfSetInternal: boolean
  @jsonMember(Boolean)
  denoteIfSetInternalProtected: boolean
  @jsonMember(Boolean)
  denoteIfSetPrivate: boolean

  apply(config: PropertyConfigModel): void {
    super.apply(config)
    if (check(this.denoteIfReadonly, config.denoteIfReadonly))
      this.denoteIfReadonly = config.denoteIfReadonly
    if (check(this.denoteIfSetonly, config.denoteIfSetonly))
      this.denoteIfSetonly = config.denoteIfSetonly

    applyPolymorphic(this, config)
  
    if (check(this.denoteIfHasGetter, config.denoteIfHasGetter))
      this.denoteIfHasGetter = config.denoteIfHasGetter
    if (check(this.denoteIfHasSetter, config.denoteIfHasSetter))
      this.denoteIfHasSetter = config.denoteIfHasSetter

    // Getters
    if (check(this.denoteIfGetPublic, config.denoteIfGetPublic))
      this.denoteIfGetPublic = config.denoteIfGetPublic
    if (check(this.denoteIfGetProtected, config.denoteIfGetProtected))
      this.denoteIfGetProtected = config.denoteIfGetProtected
    if (check(this.denoteIfGetInternal, config.denoteIfGetInternal))
      this.denoteIfGetInternal = config.denoteIfGetInternal
    if (check(this.denoteIfGetInternalProtected, config.denoteIfGetInternalProtected))
      this.denoteIfGetInternalProtected = config.denoteIfGetInternalProtected
    if (check(this.denoteIfGetPrivate, config.denoteIfGetPrivate))
      this.denoteIfGetPrivate = config.denoteIfGetPrivate

    // Setters
    if (check(this.denoteIfSetPublic, config.denoteIfSetPublic))
      this.denoteIfSetPublic = config.denoteIfSetPublic
    if (check(this.denoteIfSetProtected, config.denoteIfSetProtected))
      this.denoteIfSetProtected = config.denoteIfSetProtected
    if (check(this.denoteIfSetInternal, config.denoteIfSetInternal))
      this.denoteIfSetInternal = config.denoteIfSetInternal
    if (check(this.denoteIfSetInternalProtected, config.denoteIfSetInternalProtected))
      this.denoteIfSetInternalProtected = config.denoteIfSetInternalProtected
    if (check(this.denoteIfSetPrivate, config.denoteIfSetPrivate))
      this.denoteIfSetPrivate = config.denoteIfSetPrivate
  }
}