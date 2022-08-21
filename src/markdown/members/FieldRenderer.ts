import FieldConfigModel from "../../models/config/members/FieldConfigModel"
import IAmFieldModel from "../../models/language/interfaces/members/IAmFieldModel"
import IAmSlicedTypeModel from "../../models/language/interfaces/types/IAmSlicedTypeModel"
import RenderMembersArgs from "../../renderer/RenderMembersArgs"
import { getOptionalSummary } from "../CommentsRenderer"
import divider, { check, optionalDivider, renderIsStaticTag, renderLinkableTypeName } from "../Util"

export function renderField(field: IAmFieldModel, args: RenderMembersArgs<IAmSlicedTypeModel, IAmFieldModel, FieldConfigModel>): string {
  return (
    divider() +
    renderFieldHeader(field, args) +
    divider() +
    getOptionalSummary(field.comments)
  )
}

function renderFieldHeader(field: IAmFieldModel, args: RenderMembersArgs<IAmSlicedTypeModel, IAmFieldModel, FieldConfigModel>): string {
  return (
    `### ${field.name} ${renderLinkableTypeName(args.parent, field.type)}` +
    renderIsStaticTag(field, args.config) +
    (field.isLiteral ? ' *const*' : '') +
    (field.isReadonly ? ' *readonly*' : '')
  )
}