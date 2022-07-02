import ClassModel from "../../models/types/ClassModel";
import { renderTypeHeader } from "../markdownRenderer";
import renderStandardMemberModel from "./StandardMemberRenderer";


export default function classRenderer(model: ClassModel): string {
  let content = renderTypeHeader(model)
  content += renderStandardMemberModel(model)
  return content
}