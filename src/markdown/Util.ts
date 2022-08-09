import PolymorphicConfigable from "../models/config/interfaces/PolymorphicConfigable"
import SingletonConfigurable from "../models/config/interfaces/SingletonConfigurable"
import { IGlobalMetaMap } from "../models/global/MapperManager"
import PolymorphicModelable from "../models/interfaces/PolymophicModelable"
import Singletonable from "../models/interfaces/Singletonable"
import TypeModel from "../models/types/TypeModel"
import CommonComment from "../models/written/CommonComment"
import { getOptionalSummary } from "./CommentsRenderer"
import { renderTypeInheritanceBlock } from "./InheritanceRenderer"

export default function divider(): string {
  return '\n\n'
}

export function check(col: unknown[]): boolean {
  return !col || !col.length
}

// export function optionalDivider(col: unknown): string {
//   return (!col || !col.length) ? '' : divider()
// }

export function optionalDivider(col: unknown): string {
  if (!col)
    return ''
  if (col instanceof Array)
    if (col.length === 0)
      return ''
  
  return divider()
}

export function renderTypeHeader(model: TypeModel<CommonComment>, map: IGlobalMetaMap): string {
  return (
    `# ${model.name} \`${model.type}\`` +
    divider() + 
    renderTypeInheritanceBlock(model, map) +
    getOptionalSummary(model.comments) +
    divider()
  )
}


/**
 * Renders the `static` tag if the config permits.
 * @param model 
 * @param config 
 * @returns 
 */
export function renderIsStaticTag(model: Singletonable, config: SingletonConfigurable): string {
  let content = ''
  if (config.denoteIfStatic)
    content += model.isStatic ? ' `static`' : ''
  return content
}

/**
 * Renders the "virtual" & "abstract" tags if the config permits.
 * @param model to be rendered.
 * @param config configuration.
 * @returns rendered result; can be an empty string.
 */
export function renderVirtualAndStaticTags(model: PolymorphicModelable, config: PolymorphicConfigable): string {
  let content = ''
  if (config.denoteIfVirtual)
    content += model.isVirtual ? ' `virtual`' : ''
  if (config.denoteIfAbstract)
    content += model.isAbstract ? ' `abstract`' : ''
  return content
}