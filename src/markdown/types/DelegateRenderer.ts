import { Parameter } from "../../models/Parameter";
import TypeKey from "../../models/TypeKey";
import TypeKeyParameter from "../../models/TypeKeyParameter";
import DelegateModel from "../../models/types/DelegateModel";
import divider from "../Util";

export default function renderDelegate(model: DelegateModel): string {
  return (
    renderParameters(model.parameters) +
    renderReturnType(model.returnType)
  )
}

function renderParameters(parameters: TypeKeyParameter[]): string {
  let content = ''
  for (const param of parameters) {
    content += (
      `*@param* \`${param.foreignKey}\` ${param.paramName}` +
      divider()
    )
  }
  return content
}

function renderReturnType(returnType: TypeKey): string {
  return `*@returns* \`${returnType.foreignKey}\``
}