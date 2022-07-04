import Nestable, { readChildrenInternal } from './interfaces/Nestable';
import Renderable from './interfaces/Renderable';
import Model from './Model';
import RenderManager from '../renderer/RenderManager';

export default class ModelTree extends Model implements Nestable, Renderable {
  childNodes = new Map<string, (Model | Nestable) & Renderable>()

  constructor(name: string, parent: Model) {
    super(name, parent);
  }

  readChildren(extraPathing: string, namespaces: string[], model: Model & Nestable): void {
    readChildrenInternal(extraPathing, namespaces, model);
  }

  render(renderManager: RenderManager): void {
    this.childNodes.forEach((model) => {
      (model as Renderable).render(renderManager)
    })
  }
}