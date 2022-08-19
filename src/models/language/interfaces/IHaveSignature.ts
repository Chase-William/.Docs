import ParameterModel from "../ParameterModel";
import IAmParameterModel from "./IAmParameterModel";

export default interface IHaveSignature {
  returnParameter: IAmParameterModel;
  parameters: IAmParameterModel[];
}