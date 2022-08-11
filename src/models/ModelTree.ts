import IHaveNestableTypes, { parseChildrenImplementation } from './interfaces/IHaveNestableTypes';
import IAmRenderable from './interfaces/IAmRenderable';
import Model from './Model';
import RenderManager from '../renderer/RenderManager';
import IAmBindable from './interfaces/IAmBindable';
import ICodebaseMap from './global/ICodebaseMap';

export default class ModelTree extends Model implements IHaveNestableTypes, IAmRenderable {
  children = new Map<string, (Model | IHaveNestableTypes) & IAmRenderable & IAmBindable>()

  constructor(name: string, parent: Model) {
    super(name, parent);
  }

  parseChildren(extraPathing: string, namespaces: string[], model: Model & IHaveNestableTypes): void {
    parseChildrenImplementation(extraPathing, namespaces, model);
  }

  render(renderManager: RenderManager): void {
    this.children.forEach((model) => {
      (model as IAmRenderable).render(renderManager)
    })
  }

  bindToCodebaseMap(map: ICodebaseMap){
   this.children.forEach(child => child.bindToCodebaseMap(map));
  }
}