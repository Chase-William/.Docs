import Nestable, { readChildrenInternal } from './Nestable';
import Model from './Model';
import Renderable from './Renderable';
import Renderer from '../markdown/Renderer';

export default class Namespace extends Model implements Nestable, Renderable {
  childNodes = new Map<string, (Model | Nestable) & Renderable>()

  constructor(name: string, parent: Model) {
    super(name, parent);
    this.type = 'namespace'
  }

  render(renderer: Renderer): void {
    this.childNodes.forEach((model) => {
      (model as Renderable).render(renderer)
    })
  }

  readChildren(namespaces: string[], model: Model & Nestable): void {
    readChildrenInternal(namespaces, model);
  }
}
