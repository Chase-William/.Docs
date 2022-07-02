import Nestable, { readChildrenInternal } from './Nestable';
import Model from './Model';
import Renderable from './Renderable';
import RenderManager from '../renderer/RenderManager';

export default class Namespace extends Model implements Nestable, Renderable {
  childNodes = new Map<string, (Model | Nestable) & Renderable>()

  constructor(name: string, parent: Model) {
    super(name, parent);
    this.type = 'namespace'
  }

  render(renderManager: RenderManager): void {
    this.childNodes.forEach((model) => {
      (model as Renderable).render(renderManager)
    })
  }

  readChildren(extraPathing: string, namespaces: string[], model: Model & Nestable): void {
    readChildrenInternal(extraPathing, namespaces, model);
  }
}
