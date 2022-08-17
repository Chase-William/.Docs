import TypeKey from "../TypeKey";
import TypeKeyParameter from "../TypeKeyParameter";

export default interface IHaveSignature {
  returnType: TypeKey;
  parameters: TypeKeyParameter[];
}