import FieldModel from "../../models/members/FieldModel"
import { getOptionalSummary } from "../CommentsRenderer"
import divider, { check } from "../Util"

export default function fieldRenderer(fields: FieldModel[]): string {
  fields.sort((a, b) => a.name.localeCompare(b.name))
  const publicFields = new Array<FieldModel>()
  const privateFields = new Array<FieldModel>()
  const protectedFields = new Array<FieldModel>()
  const internalFields = new Array<FieldModel>()
  const internalAndProtectedFields = new Array<FieldModel>()

  for (const prop of fields) {
    if (prop.isInternal && prop.isProtected) {
      internalAndProtectedFields.push(prop)
    } else if (prop.isInternal) {
      internalFields.push(prop)
    } else if (prop.isProtected) {
      protectedFields.push(prop)
    } else if (prop.isPublic) {
      publicFields.push(prop)
    } else { // private
      privateFields.push(prop)
    }
  }

  return (
    renderFields(publicFields) +
    divider()
  )
}

function renderFields(fields: FieldModel[]): string {
  if (check(fields)) return ''

  let content = '## '

  const first = fields[0]
  if (first.isPublic) {
    content += '`public` '
  } else if (first.isPrivate) {
    content += '`private` '
  } else if (first.isInternal && first.isProtected) {
    content += '`internal protected` '
  } else if (first.isInternal) {
    content += '`internal` '
  } else { // protected
    content += '`protected` '
  }
  content = 'Fields'

  for (const field of fields) {
    content += (
      divider() +
      renderFieldHeader(field) +
      divider() +
      `${getOptionalSummary(field.comments)}`
    )
  }
  return content
}

function renderFieldHeader(field: FieldModel): string {
  return `### ${field.name}${
    field.isStatic ? '' : ' `static`'}${
    field.isConstant ? ' `const`' : ''}${
    field.isReadonly ? ' `readonly`' : ''}`
}

// function renderFields(fields: FieldModel[]): string {
//   let content = ''
//   for (const field of fields) {
//     content += (
//       `|${field.name}|\`${field.type}\`|${getOptionalSummary(field.comments)}|\n`
//     )
//   }
//   return content
// }