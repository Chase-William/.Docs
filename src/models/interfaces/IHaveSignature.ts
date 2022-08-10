import { Parameter } from "../Parameter";

export default interface IHaveSignature {
  returnType: string;
  parameters: Parameter[];
}