import { readdirSync, readFileSync } from 'fs';
import { TypedJSON } from 'typedjson';
import Model from './Model';
import Namespace from './Namespace';
import ClassModel from './types/ClassModel';
import DelegateModel from './types/DelegateModel';
import EnumModel from './types/EnumModel';
import InterfaceModel from './types/InterfaceModel';
import StructModel from './types/StructModel';

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
  let fileOrFolderNames = readdirSync(namespaceDir);
  // The more "nested" a type is, put it farther into the back of the collection
  /*
    Example:
    [
      "ClassA",
      "ClassB",
      "ClassA+ClassC",
      "ClassA+ClassC+ClassD"
    ]

    This prevents us from running into a situation where a nested class doesn't have containing class to
    be put inside yet.
  */
  fileOrFolderNames = fileOrFolderNames.sort((a: string, b: string): number => {
    if ((a.match(/\u002B/g) || []).length > (b.match(/\u002B/g) || []).length) {
      return 1
    }
    return -1
  })
  for (const name of fileOrFolderNames) {
    // Handle File
    if (name.endsWith('.json')) {
      
      const contents = readFileSync(namespaceDir + '\\' + name);
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
          handleParentChildSetup(
            name, 
            model, 
            classSerializer.parse(fileStr)
          )                    
          break;
        case 'enum':
          handleParentChildSetup(
            name, 
            model, 
            enumSerializer.parse(fileStr)
          ) 
          break;
        case 'interface':
          handleParentChildSetup(
            name, 
            model, 
            interfaceSerializer.parse(fileStr)
          )  
          break;
        case 'struct':
          handleParentChildSetup(
            name, 
            model, 
            structSeralizer.parse(fileStr)
          )  
          break;
        case 'delegate':
          handleParentChildSetup(
            name, 
            model, 
            delegateSerializer.parse(fileStr)
          ) 
          break;
        default:
          throw new Error(
            'When parsing json tree a type was encounter that is not either a class, interface, enum, struct, or delegate.',
          );
      }
      
    } else {
      // Handle directory
      // console.log(name);
      const child = new Namespace(name, model);
      model.childNodes.set(child.name, child);
      child.readChildren(namespaces, child);
    }
  }
  namespaces.pop(); // Now leaving this namespace
}

/**
 * Handles the setup required for parent / child relationships wthin our ModelTree.
 * @param fileName The filename of the current type. 
 * @param parent The lowest parent obtainable at the time of this function call.
 * @param newModel The model to be added to the ModelTree.
 */
function handleParentChildSetup<T extends ClassModel | InterfaceModel | StructModel | EnumModel | DelegateModel>(fileName: string, parent: Model & INestable, newModel: T): void {
  if (fileName.includes('+')) {    
    handleNestedTypeParentChildSetup(fileName, parent, newModel)
  } else {
    newModel.parent = parent;
    parent.childNodes.set(newModel.name, newModel);
  }    
}

/**
 * Handles the setup for parent / child relationship when type nesting is involved.
 * @param fileName The filename of the current type.
 * @param parent the starting parent to work from to find other parents down the chain leading to the model.
 * @param newModel The model to be added to the ModelTree.
 */
function handleNestedTypeParentChildSetup<T extends ClassModel | InterfaceModel | StructModel | EnumModel | DelegateModel>(fileName: string, parent: Model & INestable, newModel: T): void {
  const containingTypes = fileName.split('+')
  // We want to stop before trying to access the last type
  const targetLength = containingTypes.length - 1
  // Instead of using recursion, just iterate over our collection of type names and change the parent each
  // each time reaching a deeper level..
  /*
    This approach is nessesary because of the possibility of types being nested more than once.
    Example: ClassA+ClassB+ClassC                
  */
  for (let i = 0; i < targetLength; i++) {
    parent = parent.childNodes.get(containingTypes[i]) as Model & INestable                
  }
  // Set the parent to the parent type or otherwise in this case; the containing type
  newModel.parent = parent
  // Add this type to the containing type's collection of types
  parent.childNodes.set(newModel.name, newModel)
}