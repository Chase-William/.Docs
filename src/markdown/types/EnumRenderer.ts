import FieldModel from "../../models/members/FieldModel"
import EnumModel from "../../models/types/EnumModel"
import hasSummaryAndComment, { getOptionalSummary } from "../CommentsRenderer"
import divider from "../Util"

export default function enumRenderer(model: EnumModel): string {
  let content = (
    `### Values \`${model.underlyingType}\`` +
    divider()
  )

  content += renderValues(model.fields)
  return content
}

function renderValues(values: FieldModel[]): string {
  let content = ''
  for (const value of values) {
    content += `- \`${value.name}\`${hasSummaryAndComment(value.comments) ? ', ' + getOptionalSummary(value.comments) : ''}` +
    divider()
  }
  return content
}