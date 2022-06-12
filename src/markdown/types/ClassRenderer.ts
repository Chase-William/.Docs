import ClassModel from "../../models/types/ClassModel";
import renderStandardMemberModel from "./StandardMemberRenderer";


export default function classRenderer(model: ClassModel): string {
  return renderStandardMemberModel(model)
}