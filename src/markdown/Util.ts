import path = require("path");
import PolymorphicConfigable from "../models/config/interfaces/PolymorphicConfigable"
import SingletonConfigurable from "../models/config/interfaces/SingletonConfigurable"
import IAmPolymorphicable from "../models/language/interfaces/IAmPolymorphicable"
import IAmSingletonable from "../models/language/interfaces/IAmSingletonable"
import CommonComment from "../models/written/CommonComment"
import { getOptionalSummary } from "./CommentsRenderer"
import { renderTypeInheritanceBlock, renderTypeNameWithArguments } from "./InheritanceRenderer"
import RenderTypeArgs, { TYPE_CONFIGURATIONS_DEF } from "../rendering/RenderTypeArgs";
import IAmTypeModel from "../models/language/interfaces/IAmTypeModel";
import IAmSlicedTypeModel from "../models/language/interfaces/types/IAmSlicedTypeModel";
import { MEMBER_TYPES_DEF } from "../rendering/RenderMembersArgs";
import TypeLink from "../rendering/TypeLink";

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

// export function renderTypeName(containingModel: MEMBER_TYPES_DEF, targetType: TypeKey, map: ICodebaseMap) {
//   const definition = map.findTypeKeyDefinition(targetType)
  
//   if (definition instanceof GenericParameterDefinition) {
//     if (!definition.baseType) // render just the name if no base type (type constraint) exists
//       return `\`<${definition.name}>\``
//     const result = map.findBaseTypeDefinition(definition.baseType)
//     const to = map.findBaseTypeDefinition(definition.baseType).model
//     if (!to) {
//       console.log(definition)
//       console.log(to)
//       console.log(result)
//     }
//     return (
//       `\`<${definition.name} : ${getHyperLink(containingModel.parent as TypeModel<CommonComment>, to)}>\``
//     )
//   } else {
//     // Only runs for types defined in the Local project that also are not intermediary
//     if (definition.model) {
//       let from: TypeModel<CommonComment>
//       // If the model given is a MemberModel, we need to get the path of the parent
//       if (containingModel instanceof MemberModel) {
//         from = (containingModel.parent as TypeModel<CommonComment>)
//       } else {
//         from = (containingModel as TypeModel<CommonComment>)
//       }

//       // console.log(`from: ${containingModel.getFilePath()} to: ${result.model.getFilePath()}`)
//       // console.log(`rel: ${path.relative(containingModel.getFilePath(), result.model.getFilePath())}`)

//       // const relPath = path.relative(from, definition.model.getFilePath())
//       return (
//         `<code><${getHyperLink(from, definition.model)}></code>`
//       )
//     }

//     return (
//       `<code title="comments here">${definition.typeDescription}</code>`
//     )
//   }

//   // const result = map.typeMap.get(targetType)
//   // // Generic types like T1 & T2 trigger this
//   // if (typeof result === 'undefined')  
//   //   return `\`${targetType}\``   
// }

// function getHyperLink(from: TypeModel<CommonComment>, to: TypeModel<CommonComment>): string {
//   const relPath = path.relative(from.getFilePath(), to.getFilePath())
//   return (
//     `<a href="./${path.join(relPath, to.name) + '.md'}">${to.name}</a>`
//   )
// }