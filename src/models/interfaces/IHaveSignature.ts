import ParameterModel from "../language/ParameterModel";

export default interface IHaveSignature {
  returnParameter: ParameterModel;
  parameters: ParameterModel[];
}