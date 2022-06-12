import DelegateModel from "../../models/types/DelegateModel";

export default function delegateRenderer(model: DelegateModel): string {
  return `\n*@returns* \`${model.returnType}\``
}