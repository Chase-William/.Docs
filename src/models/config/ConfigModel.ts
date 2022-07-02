import { jsonMember, jsonObject } from "typedjson"

@jsonObject
export default class ConfigModel {
  @jsonMember(Boolean)
  showIfPublic: boolean
  @jsonMember(Boolean)
  showIfProtected: boolean
  @jsonMember(Boolean)
  showIfInternal: boolean
  @jsonMember(Boolean)
  showIfInternalProtected: boolean
  @jsonMember(Boolean)
  showIfPrivate: boolean

  apply(config: ConfigModel): void {
    if (this.check(this.showIfPublic, config.showIfPublic))
      this.showIfPublic = config.showIfPublic
    if (this.check(this.showIfProtected, config.showIfProtected))
      this.showIfProtected = config.showIfProtected
    if (this.check(this.showIfInternal, config.showIfInternal))
      this.showIfInternal = config.showIfInternal
    if (this.check(this.showIfInternalProtected, config.showIfInternalProtected))
      this.showIfInternalProtected = config.showIfInternalProtected
    if (this.check(this.showIfPrivate, config.showIfPrivate))
      this.showIfPrivate = config.showIfPrivate
  }

  /**
  * Check if incoming value exists (not falsy) & and is different from existing
  */
  check(existing: boolean, incoming: boolean | undefined): boolean {
    return typeof incoming !== 'undefined' && incoming != existing
  }
}