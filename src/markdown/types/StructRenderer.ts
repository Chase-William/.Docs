import StructModel from "../../models/types/StructModel";
import standardMembersRenderer from "./StandardMemberRenderer";

export default function structRenderer(model: StructModel): string {
  return standardMembersRenderer(model)
}