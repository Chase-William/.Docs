import MethodConfigModel from "../../models/config/members/MethodConfigModel"
import ICodebaseMap from "../../models/global/ICodebaseMap"
import MethodModel from "../../models/members/MethodModel"
import { getOptionalSummary } from "../CommentsRenderer"
import divider, { renderTypeName, renderVirtualAndStaticTags } from "../Util"

export function renderMethod(method: MethodModel, config: MethodConfigModel, map: ICodebaseMap): string {
  return (
    divider() +
    renderMethodHeader(method, config) +
    divider() +
    getOptionalSummary(method.comments) +
    (!(method.parameters) || method.parameters.length == 0 ? '' : '\n') +
    renderMethodParams(method, config, map) + 
    renderMethodReturn(method, config, map)
  )
}

function renderMethodReturn(method: MethodModel, config: MethodConfigModel, map: ICodebaseMap): string {
  return (
    (method.parameters ? divider() : '') +
    '- *@returns* ' +
    method.returnType
  )  
}

function renderMethodParams(method: MethodModel, config: MethodConfigModel, map: ICodebaseMap): string {
  let content = ''
  method.parameters.forEach(param => {
    content += (
      '\n- *@param* ' +
      `${param.name} \`${renderTypeName(method, param.type, map)}\``
    )
  })
  return content
}

function renderMethodHeader(method: MethodModel, config: MethodConfigModel): string {
  return (
    `### ${method.name}` +
    renderVirtualAndStaticTags(method, config)
  )
}