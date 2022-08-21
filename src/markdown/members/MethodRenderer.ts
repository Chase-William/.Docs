import MethodConfigModel from "../../models/config/members/MethodConfigModel"
import IAmMethodModel from "../../models/language/interfaces/members/IAmMethodModel"
import IAmSlicedTypeModel from "../../models/language/interfaces/types/IAmSlicedTypeModel"
import RenderMembersArgs from "../../renderer/RenderMembersArgs"
import { getOptionalSummary } from "../CommentsRenderer"
import { renderMemberInheritanceInfo } from "../InheritanceRenderer"
import divider, { optionalDivider, renderLinkableTypeName, renderVirtualAndStaticTags } from "../Util"

export function renderMethod(method: IAmMethodModel, args: RenderMembersArgs<IAmSlicedTypeModel, IAmMethodModel, MethodConfigModel>): string {
  const inheritInfo = renderMemberInheritanceInfo(args.parent, method)
  return (
    divider() +
    renderMethodHeader(method, args) +
    divider() +
    inheritInfo +
    optionalDivider(inheritInfo) +
    getOptionalSummary(method.comments) +
    (!(method.parameters) || method.parameters.length == 0 ? '' : '\n') +
    renderMethodParams(method, args) + 
    renderMethodReturn(method, args)
  )
}

function renderMethodReturn(method: IAmMethodModel, args: RenderMembersArgs<IAmSlicedTypeModel, IAmMethodModel, MethodConfigModel>): string {
  return (
    divider() +
    (method.returnParameter.type.name === 'Void' ? '' :
    '- *@returns* ' +
    renderLinkableTypeName(args.parent, method.returnParameter.type))
  )  
}

function renderMethodParams(method: IAmMethodModel, args: RenderMembersArgs<IAmSlicedTypeModel, IAmMethodModel, MethodConfigModel>): string {
  let content = ''
  method.parameters.forEach(param => {    
    content += (
      '\n- *@param* ' +
      `${param.name} ${renderLinkableTypeName(args.parent, param.type)}`
    )
  })
  return content
}

function renderMethodHeader(method: IAmMethodModel, args: RenderMembersArgs<IAmSlicedTypeModel, IAmMethodModel, MethodConfigModel>): string {
  return (
    `### ${method.name}(...)` + 
    renderVirtualAndStaticTags(method, args.config)
  )
}