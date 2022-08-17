import TypeKey from "../TypeKey"
import AssemblyDefinition from "./AssemblyDefinition"
import GenericParameterDefinition from "./GenericParameterDefinition"
import ProjectDefinition from "./ProjectDefinition"
import TypeDefinition from "./TypeDefinition"

export default interface ICodebaseMap {
  typeMap: Map<string, TypeDefinition>
  asmMap: Map<string, AssemblyDefinition>
  projMap: Map<string, ProjectDefinition>

  findBaseTypeDefinition(baseType: string): TypeDefinition
  findTypeKeyDefinition(typeKey: TypeKey): TypeDefinition | GenericParameterDefinition | undefined
}
