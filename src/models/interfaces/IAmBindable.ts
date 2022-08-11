import ICodebaseMap from "../global/ICodebaseMap";
import TypeModel from "../types/TypeModel";
import CommonComment from "../written/CommonComment";

/**
 * Represents a object that can be linked to a TypeDefinition in the global codebase mapper.
 */
export default interface IAmBindable {
  bindToCodebaseMap(map: ICodebaseMap): void
}

/**
 * Creates a bi-directional reference between a TypeModel and its TypeDefinition.
 * This allows easy tracing of information related to a given type.
 * @param model The model to be used in linking.
 * @param map The map containing the type that will be used in linking.
 */
export function bindToCodebaseMapImplementation(model: TypeModel<CommonComment>, map: ICodebaseMap): void {
  const result = map.typeMap.get(model.fullName)
  result.model = model
  model.globalTypeDef = result
}