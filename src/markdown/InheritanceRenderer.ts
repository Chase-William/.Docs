import IAmSlicedTypeModel from "../models/language/interfaces/types/IAmSlicedTypeModel";
import RenderTypeArgs, { TYPE_CONFIGURATIONS_DEF } from "../renderer/RenderTypeArgs";
import TypeLink from "../renderer/TypeLink";
import divider from "./Util";

export function renderTypeInheritanceBlock(model: IAmSlicedTypeModel, args: RenderTypeArgs<TYPE_CONFIGURATIONS_DEF>): string {
  const baseTypes = new Array<IAmSlicedTypeModel>()
  let current = model
  let typeNames: { root: TypeLink; generics: TypeLink[]; }
  while(current.baseType) {
    baseTypes.push(current.baseType)
    current = current.baseType
  }

  // Do not render only one parent.. its going to be System.Object
  if (baseTypes.length <= 1)
    return ''

  let content = '```\nட '  
  for (let i = 0; i < baseTypes.length; i++) {
    typeNames = model.getNameWithGenerics(baseTypes[i], '.md')
    content += (
      renderIndent(i) +
      typeNames.root.name +
      (typeNames.generics.length > 0 ? 
      `<${typeNames.generics.map(v => v.name).join(', ')}>` :
      '') +
      '\n'
    )
  }
  content += '```'
  return content + divider()
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