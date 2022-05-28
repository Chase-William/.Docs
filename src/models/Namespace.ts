import INestable, { readChildrenInternal } from './INestable';
import Model from './Model';

export default class Namespace extends Model implements INestable {
  childNodes: Model[] = new Array<Model>();

  constructor(name: string, parent: Model) {
    super(name, parent);
  }

  readChildren(namespaces: string[], model: Model & INestable): void {
    readChildrenInternal(namespaces, model);
  }
}
