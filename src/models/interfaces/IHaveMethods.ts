import MethodModel from "../members/MethodModel";
import Model from "../Model";

export default interface IHaveMethods {
  methods: MethodModel[]
}

export function setParentForMethods(model: IHaveMethods & Model) {
  model.methods.forEach(method => method.parent = model)
}