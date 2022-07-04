import { check } from "../ConfigModel"

/**
 * Represents a configuration that controls whether a entity's virtual & abstract state can be rendered.
 */
export default interface PolymorphicConfigable {
  denoteIfVirtual: boolean
  denoteIfAbstract: boolean
}

/**
 * Apply an incoming configuration to an existing one.
 * @param existingConfig existing config.
 * @param incomingConfig incoming config.
 */
export function applyPolymorphic(existingConfig: PolymorphicConfigable, incomingConfig: PolymorphicConfigable): void {
  if (check(existingConfig.denoteIfVirtual, incomingConfig.denoteIfVirtual))
    existingConfig.denoteIfVirtual = incomingConfig.denoteIfVirtual
  if (check(existingConfig.denoteIfAbstract, incomingConfig.denoteIfAbstract))
    existingConfig.denoteIfAbstract = incomingConfig.denoteIfAbstract
}