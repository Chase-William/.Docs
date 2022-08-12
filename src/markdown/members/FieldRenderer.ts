import FieldConfigModel from "../../models/config/members/FieldConfigModel"
import ICodebaseMap from "../../models/global/ICodebaseMap"
import FieldModel from "../../models/members/FieldModel"
import { getOptionalSummary } from "../CommentsRenderer"
import divider, { check, optionalDivider, renderIsStaticTag, renderTypeName } from "../Util"

export function renderField(field: FieldModel, config: FieldConfigModel, map: ICodebaseMap): string {
  return (
    divider() +
    renderFieldHeader(field, config, map) +
    divider() +
    getOptionalSummary(field.comments)
  )
}

function renderFieldHeader(field: FieldModel, config: FieldConfigModel, map: ICodebaseMap): string {
  return (
    `### ${field.name} ${renderTypeName(field, map)}` +
    renderIsStaticTag(field, config) +
    (field.isConstant ? ' `const`' : '') +
    (field.isReadonly ? ' `readonly`' : '')
  )
}