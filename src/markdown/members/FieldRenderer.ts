import FieldModel from "../../models/members/FieldModel"
import { getOptionalSummary } from "../CommentsRenderer"

export default function renderFields(fields: FieldModel[]): string {
  let content = (
    `\n\n## Fields\n| Name | Type | Summary |\n| ---- | ---- | ------- |\n`
  )
  
  for (const field of fields) {
    content += (
      `|${field.name}|\`${field.type}\`|${getOptionalSummary(field.comments)}|\n`
    )
  }  

  return content
}