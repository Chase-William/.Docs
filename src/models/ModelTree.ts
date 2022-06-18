import Nestable, { readChildrenInternal } from './Nestable';
import Renderer from '../markdown/Renderer';
import Renderable from './Renderable';
import Model from './Model';

export default class ModelTree extends Model implements Nestable, Renderable {
  childNodes = new Map<string, (Model | Nestable) & Renderable>()

  constructor(name: string, parent: Model) {
    super(name, parent);
  }

  readChildren(extraPathing: string, namespaces: string[], model: Model & Nestable): void {
    readChildrenInternal(extraPathing, namespaces, model);
  }

  render(renderer: Renderer): void {
    this.childNodes.forEach((model) => {
      (model as Renderable).render(renderer)
    })
  }
}