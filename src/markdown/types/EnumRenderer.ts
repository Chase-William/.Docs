import EnumModel from "../../models/types/EnumModel"
import hasSummaryAndComment, { getOptionalSummary } from "../CommentsRenderer"

export default function enumRenderer(model: EnumModel): string {
  let content = `\n\n### Values \`${model.underlyingType}\`\n`

  for (const value of model.fields) {
    content += `\n- ${value.name}${hasSummaryAndComment(model.comments) ? ', ' + getOptionalSummary(model.comments) : ''}`
  }

  return content
}