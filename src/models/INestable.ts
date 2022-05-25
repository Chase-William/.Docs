import { readdirSync, readFileSync } from "fs";
import { JsonSerializer } from "typescript-json-serializer";
import Model from "./Model";
import Namespace from "./Namespace";
import ClassModel from "./types/ClassModel";

export default interface INestable {
  children: Model[]

  readChildren(namespaces: Array<string>, model: Model & INestable): void
}

const defaultSerialzer = new JsonSerializer()

/**
 * This function purely exist because of the lack of traits in JS/TS. 
 * This method's implementation is identical across multiple types, but not all.
 * Therefore, an interface is a must and this *hacky* solution resolves 
 * the issue of either duplicate code or use traits. Lastly, I tried using
 * a concrete class, but it resulted in circle dependency.
 * @param namespaces 
 * @param model 
 */
export function readChildrenInternal(namespaces: Array<string>, model: Model & INestable): void {
  namespaces.push(model.name) // Working within this namespace
  console.log(namespaces)
  const namespaceDir = namespaces.join('\\');
  const dirs = readdirSync(namespaceDir)
  for (const path of dirs) {
    // Handle File
    if (path.endsWith(".json")) {
      console.log('File: ' + path)

      const contents = readFileSync(namespaceDir + '\\' + path);
      const fileStr = contents.toString('ascii')

      const type = defaultSerialzer.deserializeObject<Model>(fileStr, Model).type

      switch (type) {
        case 'class':
          model.children.push(defaultSerialzer.deserializeObject<ClassModel>(fileStr, ClassModel))
          break;
        case 'enum':
          model.children.push(defaultSerialzer.deserializeObject<ClassModel>(fileStr, ClassModel))
          break;          
        case 'interface':
          model.children.push(defaultSerialzer.deserializeObject<ClassModel>(fileStr, ClassModel))
          break;
        case 'struct':
          model.children.push(defaultSerialzer.deserializeObject<ClassModel>(fileStr, ClassModel))
          break;
        case 'delegate':
          model.children.push(defaultSerialzer.deserializeObject<ClassModel>(fileStr, ClassModel))
          break;
        default:
          throw new Error('When parsing json tree a type was encounter that is not either a class, interface, enum, struct, or delegate.')          
      }
      // const result = defaultSerialzer.deserializeObject<ClassModel>(fileStr, ClassModel)
      // console.log(result.comments)
    } else { // Handle directory
      console.log(path)
      const child = new Namespace(path, model)
      model.children.push(child)
      child.readChildren(namespaces, child)
    }
  }
  namespaces.pop() // Now leaving this namespace
}