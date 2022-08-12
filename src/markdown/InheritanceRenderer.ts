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
  //console.log(type)
  if (!type)
    return ''
  if (type.typeArguments.length > 0) {
    /*
    Get only the text before the "`" which signifies arguments.
    Then remove the leading namespace.
    */         
    let content = type.typeDescription.substring(0, type.typeDescription.indexOf('`'))
    content = getTypeNameWithoutNamespace(content) + '<'
    // let content = type.typeDescription.substring(0, type.typeDescription.indexOf('`')) + '<'
    // Used to contain all the type defs
    const argDefs = new Array<TypeDefinition>(type.typeArguments.length)
    // Get all arguments' full type def
    for (let i = 0; i < type.typeArguments.length; i++) {
      // Get type from dictionary of types
      const tDef = map.typeMap.get(type.typeArguments[i])
      argDefs[i] = tDef
      // Check if recursive processing of type argumented types is needed
      if (argDefs[i].typeArguments.length > 0)
        content += renderTypeNameWithArguments(tDef, map)
      else { 
        // has no arguments, just add type name
        content += getTypeNameWithoutNamespace(argDefs[i].typeDescription)
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