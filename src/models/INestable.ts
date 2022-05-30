import { readdirSync, readFileSync } from 'fs';
import { TypedJSON } from 'typedjson';
import Model from './Model';
import Namespace from './Namespace';
import ClassModel from './types/ClassModel';
import DelegateModel from './types/DelegateModel';
import EnumModel from './types/EnumModel';
import InterfaceModel from './types/InterfaceModel';
import StructModel from './types/StructModel';
import CommonComment from './written/CommonComment';

export default interface INestable {
  childNodes: Map<string, Model | INestable>
  //childNodes: (Model | INestable)[];

  readChildren(namespaces: Array<string>, model: Model & INestable): void;
}

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
  namespaces.push(model.name); // Working within this namespace
  // console.log(namespaces);
  const namespaceDir = namespaces.join('\\');
  const dirs = readdirSync(namespaceDir);
  for (const path of dirs) {
    // Handle File
    if (path.endsWith('.json')) {
      // console.log('File: ' + path);

      const contents = readFileSync(namespaceDir + '\\' + path);
      const fileStr = contents.toString('ascii');

      // Get a simplified deserialzied version of the object to defer type before deserializing to 
      // more derived type
      
      const serializer = new TypedJSON(Model)
      const classSerializer = new TypedJSON(ClassModel)
      const enumSerializer = new TypedJSON(EnumModel)
      const interfaceSerializer = new TypedJSON(InterfaceModel)
      const structSeralizer = new TypedJSON(StructModel)
      const delegateSerializer = new TypedJSON(DelegateModel)
      const tester = serializer.parse(fileStr)

      switch (tester.type) {
        case 'class':
          {
            const temp = classSerializer.parse(fileStr)
            temp.parent = model;
            model.childNodes.set(tester.name, temp);
          }          
          break;
        case 'enum':
          {
            const temp = enumSerializer.parse(fileStr)
            temp.parent = model;
            model.childNodes.set(tester.name, temp);
          } 
          break;
        case 'interface':
          {
            const temp = interfaceSerializer.parse(fileStr)
            temp.parent = model;
            model.childNodes.set(tester.name, temp);
          } 
          break;
        case 'struct':
          {
            const temp = structSeralizer.parse(fileStr)
            temp.parent = model;
            model.childNodes.set(tester.name, temp);
          } 
          break;
        case 'delegate':
          {
            const temp = delegateSerializer.parse(fileStr)
            temp.parent = model;
            model.childNodes.set(tester.name, temp);
          }
          break;
        default:
          throw new Error(
            'When parsing json tree a type was encounter that is not either a class, interface, enum, struct, or delegate.',
          );
      }
      // const result = defaultSerialzer.deserializeObject<ClassModel>(fileStr, ClassModel)
      // console.log(result.comments)
    } else {
      // Handle directory
      // console.log(path);
      const child = new Namespace(path, model);
      model.childNodes.set(child.name, child);
      child.readChildren(namespaces, child);
    }
  }
  namespaces.pop(); // Now leaving this namespace
}
