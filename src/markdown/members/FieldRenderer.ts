import FieldModel from "../../models/members/FieldModel"
import { getOptionalSummary } from "../CommentsRenderer"
import divider from "../Util"

export default function fieldRenderer(fields: FieldModel[]): string {
  return (
    '## Fields' +
    divider() +
    '| Name | Type | Summary |\n' +
    '| ---- | ---- | ------- |\n' +
    renderFields(fields)
  )
}

function renderFields(fields: FieldModel[]): string {
  let content = ''
  for (const field of fields) {
    content += (
      `|${field.name}|\`${field.type}\`|${getOptionalSummary(field.comments)}|\n`
    )
  }
  return content
}