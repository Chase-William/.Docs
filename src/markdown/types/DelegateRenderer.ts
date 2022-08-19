
import DelegateConfigModel from "../../models/config/types/DelegateConfigModel";
import IAmParameterModel from "../../models/language/interfaces/IAmParameterModel";
import IAmDelegateModel from "../../models/language/interfaces/types/IAmDelegateModel";
import RenderTypeArgs from "../../rendering/RenderTypeArgs";
import divider from "../Util";

export default function renderDelegate(model: IAmDelegateModel, args: RenderTypeArgs<DelegateConfigModel>): string {
  return (
    'Needs Implementation with new system...'
    // renderParameters(model.para) +
    // renderReturnType(model.returnType)
  )
}

function renderParameters(parameters: IAmParameterModel[]): string {
  let content = ''
  for (const param of parameters) {
    content += (
      `*@param* \`${param.name}\` ${param.type.getName()}` +
      divider()
    )
  }
  return content
}

function renderReturnType(returnType: IAmParameterModel): string {
  return `*@returns* \`${returnType.type.getName()}\``
}