import MethodConfigModel from "../../models/config/members/MethodConfigModel"
import IAmMethodModel from "../../models/language/interfaces/members/IAmMethodModel"
import IAmSlicedTypeModel from "../../models/language/interfaces/types/IAmSlicedTypeModel"
import RenderMembersArgs from "../../rendering/RenderMembersArgs"
import { getOptionalSummary } from "../CommentsRenderer"
import divider, { renderTypeName, renderVirtualAndStaticTags } from "../Util"

export function renderMethod(method: IAmMethodModel, args: RenderMembersArgs<IAmSlicedTypeModel, IAmMethodModel, MethodConfigModel>): string {
  return (
    divider() +
    renderMethodHeader(method, args) +
    divider() +
    getOptionalSummary(method.comments) +
    (!(method.parameters) || method.parameters.length == 0 ? '' : '\n') +
    renderMethodParams(method, args) + 
    renderMethodReturn(method, args)
  )
}

function renderMethodReturn(method: IAmMethodModel, args: RenderMembersArgs<IAmSlicedTypeModel, IAmMethodModel, MethodConfigModel>): string {
  return (
    (method.parameters ? divider() : '') +
    '- *@returns* '
    // renderTypeName(method.)
  )  
}

function renderMethodParams(method: IAmMethodModel, args: RenderMembersArgs<IAmSlicedTypeModel, IAmMethodModel, MethodConfigModel>): string {
  let content = ''
  method.parameters.forEach(param => {
    content += (
      '\n- *@param* ' +
      `${param.name} ${renderTypeName(param.type)}`
    )
  })
  return content
}

function renderMethodHeader(method: IAmMethodModel, args: RenderMembersArgs<IAmSlicedTypeModel, IAmMethodModel, MethodConfigModel>): string {
  return (
    `### ${method.name}` +
    renderVirtualAndStaticTags(method, args.config)
  )
}