/**
 * Represents a configuration that controls whether a entity's virtual & abstract state can be rendered.
 */
export default interface PolymorphicConfigable {
  denoteIfVirtual: boolean
  denoteIfAbstract: boolean
}