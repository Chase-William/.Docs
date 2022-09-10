import PolymorphicConfigable from "../models/config/interfaces/PolymorphicConfigable"
import SingletonConfigurable from "../models/config/interfaces/SingletonConfigurable"
import IAmPolymorphicable from "../models/language/interfaces/IAmPolymorphicable"
import IAmSingletonable from "../models/language/interfaces/IAmSingletonable"
import { getOptionalSummary } from "./CommentsRenderer"
import { renderInterfaces, renderTypeInheritanceBlock } from "./InheritanceRenderer"
import RenderTypeArgs, { TYPE_CONFIGURATIONS_DEF } from "../renderer/RenderTypeArgs";
import IAmSlicedTypeModel from "../models/language/interfaces/types/IAmSlicedTypeModel";
import TypeLink from "../renderer/TypeLink";
import IAmFullTypeModel from "../models/language/interfaces/IAmFullTypeModel"

export default function divider(): string {
  return '\n\n'
}

/**
 * Check if value is fasly or empty array.
 * @param col 
 * @returns 
 */
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

/**
 * Renders the header of a type with it's inheritance block.
 * @param type The type to base the header on.
 * @param args Arguments for rendering.
 * @returns A string containing the markdown text for the header.
 */
export function renderTypeHeader(type: IAmSlicedTypeModel, args: RenderTypeArgs<TYPE_CONFIGURATIONS_DEF>): string {
  return (
    `# ${renderLinkableTypeName(type, type)} *${getTypeModelConstructType(type)}*` +
    divider() + 
    renderTypeInheritanceBlock(type, args) +
    renderInterfaces(type, args) +
    getOptionalSummary(type.comments) +
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
    content += model.isStatic ? ' *static*' : ''
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
    content += model.isVirtual ? ' *virtual*' : ''
  if (config.denoteIfAbstract)
    content += model.isAbstract ? ' *abstract*' : ''
  return content
}

/**
 * Renders the name of a type with it's generics type arguments or parameters if they exist. The
 * type names will be hyper links relative to the @param from parameter.
 * @param from The type the user is navigating from.
 * @param to The type the user navigating to.
 * @returns A string containing HTML that contains the name/args/params with links if appropriate.
 */
export function renderLinkableTypeName(from: IAmSlicedTypeModel, to: IAmSlicedTypeModel): string {
  const nameParts = from.getNameWithGenerics(to, '.md')
  let content = ''

  // Render a type that can be simply put into a hyper-link
  if (nameParts.root.to.isRenderable() && from !== to)
    content = renderTypeHyperLink(nameParts.root)
  // Render a type that can be linked to with a little configuration
  else if (
    nameParts.root.to.isRenderableArrayType() && 
    nameParts.root.to.elementType.isRenderable()) {
    content = renderTypeWithElementType(nameParts.root)
  } else { // Render a type that cannot be linked to
    content = renderTypeSpanWithComment(nameParts.root)
  }

  return (
    `<code>` +
    content +
    (nameParts.generics.length > 0 ?
      ('<' + renderGenerics(nameParts.generics) + '>') :
      '') +
    `</code>`
  )
}

function renderTypeHyperLink(link: TypeLink): string {
  return makeLink(link.filePath, link.name)
}

function renderTypeSpanWithComment(link: TypeLink): string {
  // If the type is an array type, provide a comment from the element type, otherwise the comment is null
  if (link.to.isArray)
    return `<span title="${link.to.elementType.comments?.getHTMLAttributeSafeSummary()}">${link.name}</span>`
  return `<span title="${link.to.comments?.getHTMLAttributeSafeSummary()}">${link.name}</span>`
}

function renderTypeWithElementType(link: TypeLink): string {
  return makeLink(link.filePath, link.to.elementType.getName()) + '[]'
}

/**
 * Renders generics with a link to their definition if it exist, otherwise just it's name with a summary if hovered.
 * @param generics Generic type parameters & generic type arguments to render.
 * @returns A comma separated string of html elements denoting generics.
 */
function renderGenerics(generics: TypeLink[]): string {
  return generics.map(v => {
    return v.to.isRenderable() ? makeLink(v.filePath, v.name) : `<span title="${v.to.comments?.getHTMLAttributeSafeSummary()}">${v.name}</span>`
  }).join(', ')
}

export function makeLink(filePath: string, content: string): string {
  // replace backslashes with forward slash otherwise the browser will 404
  return `[${content}](${filePath.replace('\\', '/')})`
}

/**
 * Gets the name of the construct for the given type. Aka is it s class, enum or interface...
 * @param typeModel To get construct name from.
 * @returns Construct name.
 */
function getTypeModelConstructType(typeModel: IAmSlicedTypeModel): string {
  const type = typeModel as IAmFullTypeModel
  if (type.isClass)
    return 'class'
  else if (type.isEnum)
    return 'enum'
  else if (type.isDelegate)
    return 'delegate'
  else if (type.isValueType)
    return 'struct'
  else 
    return 'interface'
}