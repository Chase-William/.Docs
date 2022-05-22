import { readdirSync } from "fs";
import Model from "./Model";
import Namespace from "./Namespace";
import TypeModel from "./types/TypeModel";
import CommonComment from "./written/CommonComment";

export default class ModelNestable<T extends CommonComment> extends TypeModel<T> {
  children: Model[]

  constructor(name: string, parent: Model) {
    super(name, parent)
    this.children = new Array<Model>()
  }

  readChildren(namespaces: Array<string>): void {
    namespaces.push(this.name) // Working within this namespace
    console.log(namespaces)
    const dirs = readdirSync(namespaces.join('\\'))
    for (const path of dirs) {
      // Handle directory
      if (!path.endsWith(".json")) {
        console.log(path)
        const model = new Namespace(path, this)
        this.children.push(model)
        model.readChildren(namespaces)
      } else { // Handle file
        console.log('File: ' + path)
      }   
    }
    namespaces.pop() // Now leaving this namespace
  }
}