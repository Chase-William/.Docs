import AssemblyDefinition from "./AssemblyDefinition"
import ProjectDefinition from "./ProjectDefinition"
import TypeDefinition from "./TypeDefinition"

export default interface ICodebaseMap {
  typeMap: Map<string, TypeDefinition>
  asmMap: Map<string, AssemblyDefinition>
  projMap: Map<string, ProjectDefinition>
}
