import AccessibilityModel from "../models/AccessibilityModel"
import ConfigModel from "../models/config/ConfigModel"
import Model from "../models/Model"
import TypeModel from "../models/types/TypeModel"
import CommonComment from "../models/written/CommonComment"
import { getOptionalSummary } from "./CommentsRenderer"

export default function divider(): string {
  return '\n\n'
}

export function check(col: unknown[]): boolean {
  return !col || !col.length
}

// export function optionalDivider(col: unknown): string {
//   return (!col || !col.length) ? '' : divider()
// }

export function optionalDivider(col: unknown): string {
  if (!col)
    return ''
  if (col instanceof Array)
    if (col.length === 0)
      return ''
  
  return divider()
}

export function renderTypeHeader(model: TypeModel<CommonComment>): string {
  return (
    `# ${model.name} \`${model.type}\`` +
    divider() +
    getOptionalSummary(model.comments) +
    divider()
  )
}