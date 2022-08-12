import PolymorphicConfigable from "../models/config/interfaces/PolymorphicConfigable"
import SingletonConfigurable from "../models/config/interfaces/SingletonConfigurable"
import ICodebaseMap from "../models/global/ICodebaseMap";
import IAmPolymorphicable from "../models/interfaces/IAmPolymorphicable"
import IAmSingletonable from "../models/interfaces/IAmSingletonable"
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

export function renderTypeHeader(model: TypeModel<CommonComment>, map: ICodebaseMap): string {
  return (
    `# ${model.name} ${renderTypeName(model.type, map)}` +
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
export function renderIsStaticTag(model: IAmSingletonable, config: SingletonConfigurable): string {
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
export function renderVirtualAndStaticTags(model: IAmPolymorphicable, config: PolymorphicConfigable): string {
  let content = ''
  if (config.denoteIfVirtual)
    content += model.isVirtual ? ' `virtual`' : ''
  if (config.denoteIfAbstract)
    content += model.isAbstract ? ' `abstract`' : ''
  return content
}

export function renderTypeName(typeStr: string, map: ICodebaseMap) {
  const result = map.typeMap.get(typeStr)
  // Generic types like T1 & T2 trigger this
  if (typeof result === 'undefined')  
    return 'undefined'  

  // Only runs for types defined in the Local project that also are not intermediary
  if (result.model) {
    return (
      `<code><<a href="./${result.model.getFilePath() + '.md'}">${result.typeDescription}</a>></code>`
    )
  } 

  return (
    `<code title="comments go here"><${result.typeDescription}></code>`
  )
}