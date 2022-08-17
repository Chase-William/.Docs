import GenericParameterDefinition from "../models/global/GenericParameterDefinition";
import ICodebaseMap from "../models/global/ICodebaseMap";
import TypeDefinition from "../models/global/TypeDefinition";
import TypeModel from "../models/types/TypeModel"
import CommonComment from "../models/written/CommonComment"
import divider from "./Util";

export function renderTypeInheritanceBlock(model: TypeModel<CommonComment>, map: ICodebaseMap): string {  
  const baseTypes = model.getOrderedBaseTypes(map)

  // Do not render only one parent.. its going to be System.Object
  if (baseTypes.length <= 1)
    return ''

  let content = '```\nட '
  for (let i = 0; i < baseTypes.length; i++) {
    content += (
      renderIndent(i) +
      renderTypeNameWithArguments(baseTypes[i], map) +
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

export function renderTypeNameWithArguments(type: TypeDefinition, map: ICodebaseMap): string {
  if (type.typeArguments.length > 0) {
    /*
    Get only the text before the "`" which signifies arguments.
    Then remove the leading namespace.
    */         
    let content = type.typeDescription.substring(0, type.typeDescription.indexOf('`'))
    content = getTypeNameWithoutNamespace(content) + '<'
    // Get all arguments' full type def
    for (let i = 0; i < type.typeArguments.length; i++) {
      // Get type from dictionary of types
      const definition = map.findTypeKeyDefinition(type.typeArguments[i])
      // Check if recursive processing of the type's argumented types is needed
      if (definition instanceof TypeDefinition) {
        if (definition.typeArguments.length > 0)
          content += renderTypeNameWithArguments(definition, map)
        else { 
          // has no arguments, just add type name
          content += getTypeNameWithoutNamespace(definition.typeDescription)
        }
      }
      // Only add a comma to the end if it is not the last argument
      if ((i + 1) < type.typeArguments.length)
        content += ', '
    }
    return content + '>'
  }
  return getTypeNameWithoutNamespace(type.typeDescription)
}

/**
 * Returns a slice of the string without the leading namespace.
 * @param typeDescription Type description to be formatted.
 * @returns A type description without the leading namespace.
 */
function getTypeNameWithoutNamespace(typeDescription: string): string {
  return typeDescription.slice(typeDescription.lastIndexOf('.') + 1)
}