import IHaveNestableTypes, { parseChildrenImplementation } from './interfaces/IHaveNestableTypes';
import Model from './Model';
import IAmRenderable from './interfaces/IAmRenderable';
import RenderManager from '../renderer/RenderManager';
import ICodebaseMap from './global/ICodebaseMap';
import IAmBindable from './interfaces/IAmBindable';

export default class Namespace 
  extends Model 
  implements IHaveNestableTypes, 
             IAmRenderable, 
             IAmBindable 
{
  children = new Map<string, (Model | IHaveNestableTypes) & IAmRenderable & IAmBindable>()

  constructor(name: string, parent: Model) {
    super(name, parent);
    this.type = 'namespace'
  }

  bindToCodebaseMap(map: ICodebaseMap): void {
    // Link children
    this.children.forEach(child => child.bindToCodebaseMap(map))
  }

  render(renderManager: RenderManager): void {
    this.children.forEach((model) => {
      (model as IAmRenderable).render(renderManager)
    })    
  }

  parseChildren(basePath: string, namespaces: string[], model: Model & IHaveNestableTypes): void {
    parseChildrenImplementation(basePath, namespaces, model);
  }
}
