import IHaveNestableTypes, { parseChildrenImplementation } from './interfaces/IHaveNestableTypes';
import Model from './Model';
import IAmRenderable from './interfaces/IAmRenderable';
import RenderManager from '../renderer/RenderManager';

export default class Namespace extends Model implements IHaveNestableTypes, IAmRenderable {
  children = new Map<string, (Model | IHaveNestableTypes) & IAmRenderable>()

  constructor(name: string, parent: Model) {
    super(name, parent);
    this.type = 'namespace'
  }

  render(renderManager: RenderManager): void {
    this.children.forEach((model) => {
      (model as IAmRenderable).render(renderManager)
    })
  }

  parseChildren(extraPathing: string, namespaces: string[], model: Model & IHaveNestableTypes): void {
    parseChildrenImplementation(extraPathing, namespaces, model);
  }
}
