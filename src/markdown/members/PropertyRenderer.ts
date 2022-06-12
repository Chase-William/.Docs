import PropertyModel from "../../models/members/PropertyModel"
import { getOptionalSummary } from "../CommentsRenderer"

export default function renderProperty(properties: PropertyModel[]): string {
  let content = (
    `\n\n## Properties\n| Name | Type | Summary |\n| ---- | ---- | ------- |\n`
  )
  
  for (const prop of properties) {
    content += (
      `|${prop.name}|\`${prop.type}\`|${getOptionalSummary(prop.comments)}|\n`
    )
  }  

  return content
}