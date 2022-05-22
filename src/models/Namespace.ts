import Model from "./Model";
import ModelNestable from "./ModelNestable";
import CommonComment from "./written/CommonComment";

export default class Namespace extends ModelNestable<CommonComment> {
  constructor(name: string, parent: Model) {
    super(name, parent)
  }
}