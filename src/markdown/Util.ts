import PolymorphicConfigable from "../models/config/interfaces/PolymorphicConfigable"
import SingletonConfigurable from "../models/config/interfaces/SingletonConfigurable"
import IAmPolymorphicable from "../models/language/interfaces/IAmPolymorphicable"
import IAmSingletonable from "../models/language/interfaces/IAmSingletonable"
import { getOptionalSummary } from "./CommentsRenderer"
import { renderTypeInheritanceBlock } from "./InheritanceRenderer"
import RenderTypeArgs, { TYPE_CONFIGURATIONS_DEF } from "../renderer/RenderTypeArgs";
import IAmSlicedTypeModel from "../models/language/interfaces/types/IAmSlicedTypeModel";
import TypeLink from "../renderer/TypeLink";

export default function divider(): string {
  return '\n\n'
}

export function check(col: unknown[]): boolean {
  return !col || !col.length
}

export function optionalDivider(col: unknown): string {
  if (!col)
    return ''
  if (col instanceof Array)
    if (col.length === 0)
      return ''
  
  return divider()
}

export function renderTypeHeader(model: IAmSlicedTypeModel, args: RenderTypeArgs<TYPE_CONFIGURATIONS_DEF>): string {
  return (
    `# ${renderTypeName(model)}` +
    divider() + 
    renderTypeInheritanceBlock(model, args) +
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

export function renderTypeName(type: IAmSlicedTypeModel): string {
  const nameParts = type.getNameWithGenerics('.md')
  return (
    `<code><p title="${nameParts.name.comments}">${nameParts.name}</p>${(nameParts.generics.length > 0 ? ('<' + renderGenerics(nameParts.generics) + '>') : '')}</code>`
  )
}

/**
 * Renders generics with a link to their definition if it exist, otherwise just it's name with a summary if hovered.
 * @param generics Generic type parameters & generic type arguments to render.
 * @returns A comma separated string of html elements denoting generics.
 */
function renderGenerics(generics: TypeLink[]): string {
  return generics.map(v => v.filePath ? `<p title="${v.comments?.summary}">${v.name}</p>` : `<a href="${v.filePath}">${v.name}</a>`).join(',')
}