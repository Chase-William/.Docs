import IAmFieldModel from "../../models/language/interfaces/members/IAmFieldModel"
import hasSummaryAndComment, { getOptionalSummary } from "../CommentsRenderer"
import divider from "../Util"

export function renderValue(value: IAmFieldModel): string {
  return (
    `- \`${value.name}\`${hasSummaryAndComment(value.comments) ? ', ' + getOptionalSummary(value.comments) : ''}` +
    divider()
  )    
}