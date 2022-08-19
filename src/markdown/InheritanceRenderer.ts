import IAmTypeModel from "../models/language/interfaces/IAmTypeModel";
import IAmSlicedTypeModel from "../models/language/interfaces/types/IAmSlicedTypeModel";
import TypeModel from "../models/language/TypeModel";
import RenderTypeArgs, { TYPE_CONFIGURATIONS_DEF } from "../rendering/RenderTypeArgs";
import divider from "./Util";

export function renderTypeInheritanceBlock(model: IAmSlicedTypeModel, args: RenderTypeArgs<TYPE_CONFIGURATIONS_DEF>): string {
  const baseTypes = new Array<IAmSlicedTypeModel>()
  let current = model
  while(current.baseType) {
    baseTypes.push(current.baseType)
    current = current.baseType
  }

  // Do not render only one parent.. its going to be System.Object
  if (baseTypes.length <= 1)
    return ''

  let content = '```\nட '
  for (let i = 0; i < baseTypes.length; i++) {
    content += (
      renderIndent(i) +
      renderTypeNameWithArguments(baseTypes[i], args) +
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

export function renderTypeNameWithArguments(type: IAmSlicedTypeModel, args: RenderTypeArgs<TYPE_CONFIGURATIONS_DEF>): string {
  if (type.genericTypeArguments.length > 0) {
    /*
    Get only the text before the "`" which signifies arguments.
    Then remove the leading namespace.
    */         
    let content = type.name.substring(0, type.name.indexOf('`'))
    // content = getTypeNameWithoutNamespace(content) + '<'
    // Get all arguments' full type def
    for (let i = 0; i < type.genericTypeArguments.length; i++) {
      // Get type from dictionary of types
      const definition = type.genericTypeArguments[i]
      // Check if recursive processing of the type's argumented types is needed
      content += definition.name
      // if (definition instanceof TypeDefinition) {
      //   if (definition.typeArguments.length > 0)
      //     content += renderTypeNameWithArguments(definition, args)
      //   else { 
      //     // has no arguments, just add type name
      //     content += getTypeNameWithoutNamespace(definition.typeDescription)
      //   }
      // }
      // Only add a comma to the end if it is not the last argument
      if ((i + 1) < type.genericTypeArguments.length)
        content += ', '
    }
    return content + '>'
  }
  return type.name
}