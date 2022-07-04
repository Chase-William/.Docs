import FieldConfigModel from "../../models/config/members/FieldConfigModel"
import FieldModel from "../../models/members/FieldModel"
import { getOptionalSummary } from "../CommentsRenderer"
import divider, { check, optionalDivider, renderIsStaticTag } from "../Util"

export function renderField(field: FieldModel, config: FieldConfigModel): string {
  return (
    divider() +
    renderFieldHeader(field, config) +
    divider() +
    getOptionalSummary(field.comments)
  )
}

function renderFieldHeader(field: FieldModel, config: FieldConfigModel): string {
  return (
    `### ${field.name}\`<${field.type}>\`` +
    renderIsStaticTag(field, config) +
    (field.isConstant ? ' `const`' : '') +
    (field.isReadonly ? ' `readonly`' : '')
  )
}