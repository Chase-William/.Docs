import InterfaceModel from "../../models/types/InterfaceModel";
import standardMembersRenderer from "./StandardMemberRenderer";

export default function interfaceRenderer(model: InterfaceModel): string {
  return standardMembersRenderer(model)
}