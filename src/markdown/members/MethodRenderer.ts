import MethodModel from "../../models/members/MethodModel"
import { getOptionalSummary } from "../CommentsRenderer"

export default function renderMethods(methods: MethodModel[]): string {
  let content = (
    `\n\n## Methods`
  )
  
  for (const method of methods) {

    content += `\n\n### ${method.name}\n${getOptionalSummary(method.comments)}`

    method.parameters.forEach(param => {
      content += `\n*@param* \`${param}\`\n`
    })
  }  

  return content
}