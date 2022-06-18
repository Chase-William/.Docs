import MethodModel from "../../models/members/MethodModel"
import { getOptionalSummary } from "../CommentsRenderer"
import divider from "../Util"

export default function methodRenderer(methods: MethodModel[]): string {
  return (
    `## Methods` +
    divider() +
    renderMethods(methods)
  )    
}

function renderMethods(methods: MethodModel[]): string {
  let content = ''
  for (const method of methods) {
    content += `### ${method.name}\n${getOptionalSummary(method.comments)}`
    method.parameters.forEach(param => {
      content += `\n*@param* \`${param}\`\n`
    })
    content += divider()
  }  
  return content
}