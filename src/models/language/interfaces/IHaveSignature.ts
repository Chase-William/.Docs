import ParameterModel from "../ParameterModel";

export default interface IHaveSignature {
  returnParameter: ParameterModel;
  parameters: ParameterModel[];
}