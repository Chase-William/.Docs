import INestable, { readChildrenInternal } from "./INestable";
import Model from "./Model";
import Namespace from "./Namespace";

export default class ModelTree extends Model implements INestable {
  children: Model[] = new Array<Model>()

  constructor(name: string, parent: Model) {
    super(name, parent)
  }
  
  readChildren(namespaces: string[], model: Model & INestable): void {
    readChildrenInternal(namespaces, model)
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