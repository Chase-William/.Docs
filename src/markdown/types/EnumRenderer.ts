import FieldModel from "../../models/members/FieldModel"
import hasSummaryAndComment, { getOptionalSummary } from "../CommentsRenderer"
import divider from "../Util"

export function renderValue(value: FieldModel): string {
  return (
    `- \`${value.name}\`${hasSummaryAndComment(value.comments) ? ', ' + getOptionalSummary(value.comments) : ''}` +
    divider()
  )    
}