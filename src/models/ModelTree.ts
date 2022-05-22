import { readdirSync } from "fs";
import Model from "./Model";
import ModelNestable from "./ModelNestable";
import Namespace from "./Namespace";
import CommonComment from "./written/CommonComment";

export default class ModelTree extends ModelNestable<CommonComment> {
  constructor(name: string, parent: Model) {
    super(name, parent)
  }

  // readChildren(namespaces: string[]): void {
  //   namespaces.push(this.name)
  //   const dirs = readdirSync(namespaces.join('\\'))
  //   for (const path of dirs) {
  //     // Handle directory
  //     if (!path.endsWith(".json")) {
  //       console.log(path)
  //       const model = new Namespace(path, this)
  //       this.children.push(model)
  //       model.readChildren()
  //     } else { // Handle file
  //       console.log('File: ' + path)
  //     }   
  //   }
  //   namespaces.pop(this.name)
  // }
}