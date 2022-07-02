import DelegateModel, { Parameter } from "../../models/types/DelegateModel";
import divider from "../Util";

export default function renderDelegate(model: DelegateModel): string {
  return (
    renderParameters(model.parameters) +
    renderReturnType(model.returnType)
  )
}

function renderParameters(parameters: Parameter[]): string {
  let content = ''
  for (const param of parameters) {
    content += (
      `*@param* \`${param.type}\` ${param.name}` +
      divider()
    )
  }
  return content
}

function renderReturnType(returnType: string): string {
  return `*@returns* \`${returnType}\``
}