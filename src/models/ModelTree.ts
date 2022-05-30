import INestable, { readChildrenInternal } from './INestable';
import Model from './Model';
import Namespace from './Namespace';

export default class ModelTree extends Model implements INestable {
  childNodes = new Map<string, Model | INestable>()

  constructor(name: string, parent: Model) {
    super(name, parent);
  }

  readChildren(namespaces: string[], model: Model & INestable): void {
    readChildrenInternal(namespaces, model);
  }
}
