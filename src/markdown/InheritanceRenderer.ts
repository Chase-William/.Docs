import IAmMemberModel from "../models/language/interfaces/members/IAmMemberModel";
import IAmSlicedTypeModel from "../models/language/interfaces/types/IAmSlicedTypeModel";
import RenderTypeArgs, { TYPE_CONFIGURATIONS_DEF } from "../renderer/RenderTypeArgs";
import divider, { makeLink } from "./Util";

export function renderInterfaces(type: IAmSlicedTypeModel, args: RenderTypeArgs<TYPE_CONFIGURATIONS_DEF>): string {
  if (type.interfaces.length == 0)
    return ''

  let content = '### Implemented Interfaces:\n\n'

  for (const _interface of type.interfaces) {
    const link = type.getTypeLinkToOther(_interface, '.md')
    if (link.filePath)
      content += `- ` + makeLink(link.filePath, link.name)
    else
      content += `- ${link.name}`
  }

  return content
}

/**
 * Renders the chain of base types in a code block.
 * @param type Type to start from.
 * @returns A string containing a formatted type chain of base types.
 */
function renderTypeChainBlock(type: IAmSlicedTypeModel): string {
  const baseTypes = type.getBaseTypes()

  let content = '```\nட '  
  for (let i = 0; i < baseTypes.length; i++) {
    content += (
      renderIndent(i) +
      renderSingleTypeChain(baseTypes[i])
    )
  }
  content += '```'
  return content + divider()
}

/**
 * Renders a single type chain.
 * @param type 
 * @returns 
 */
function renderSingleTypeChain(type: IAmSlicedTypeModel): string {
  const typeNames = type.getNameWithGenerics(type, '.md')
    return (
      typeNames.root.name +
      (typeNames.generics.length > 0 ? 
      `<${typeNames.generics.map(v => v.name).join(', ')}>` :
      '') +
      '\n'
    )
}

export function renderTypeInheritanceBlock(model: IAmSlicedTypeModel, args: RenderTypeArgs<TYPE_CONFIGURATIONS_DEF>): string {
  // Only render the inheritance tree if it involves 2 or more baseTypes
  if (model.baseType?.baseType)
    return renderTypeChainBlock(model)
  return ''
}

function renderIndent(index: number): string {
  if (index == 0)
    return ''
  const spaces = new Array(index).fill(' ')
  return (
    spaces.join(' ') +
    ' ட '
  )
}

// ˪ட―↘ ↳

/**
 * Renders a message informing the reader that this member is inherited from a parent if not defined in @param containingType.
 * @param containingType The type that contains the member.
 * @param member The member to create a message for.
 * @param args Rendering info.
 * @returns A string if the member is defined else where in the inheritance tree.
 */
 export function renderMemberInheritanceInfo(containingType: IAmSlicedTypeModel | null, member: IAmMemberModel): string {
  if (!member.DeclaringType || member.DeclaringType == containingType)
    return '' // Member is defined in the current type
  // Member is inherited from a type other than the containingType (child of that parent.. who is the parent) 
  return (
    '```\nட ' +
    renderSingleTypeChain(member.DeclaringType) +
    '```'
  )
}