import { IGlobalMetaMap } from "../models/global/MapperManager";
import TypeDefinition from "../models/global/TypeDefinition";
import TypeModel from "../models/types/TypeModel"
import CommonComment from "../models/written/CommonComment"
import divider from "./Util";

export function renderTypeInheritanceBlock(model: TypeModel<CommonComment>, map: IGlobalMetaMap): string {  
  const baseTypes = model.getOrderedBaseTypes(map)

  // Do not render only one parent.. its going to be System.Object
  if (baseTypes.length <= 1)
    return ''

  let content = '```\nட '
  for (let i = 0; i < baseTypes.length; i++) {
    content += (
      renderIndent(i) +
      renderTypeName(baseTypes[i], map) +
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

function renderTypeName(type: TypeDefinition, map: IGlobalMetaMap): string {
  if (type.typeArguments.length > 0) {
    //let temp = ''
    // Set top line of content to type and opening type angular bracket
    let content = type.typeDescription.substring(0, type.typeDescription.indexOf('`')) + '<'
    // Used to contain all the type defs
    const argDefs = new Array<TypeDefinition>(type.typeArguments.length)
    // Get all arguments' full type def
    for (let i = 0; i < type.typeArguments.length; i++) {
      // Get type from dictionary of types
      const tDef = map.typeMap.get(type.typeArguments[i])
      argDefs[i] = tDef
      // Check if recursive processing of type argumented types is needed
      if (argDefs[i].typeArguments.length > 0)
        content += renderTypeName(tDef, map)
      else { 
        // has no arguments, just add type name
        content += argDefs[i].typeDescription
      }

      // Only add a comma to the end if it is not the last argument
      if ((i + 1) < type.typeArguments.length)
        content += ', '
    }
    return content + '>'
  }
  return type.typeDescription
}