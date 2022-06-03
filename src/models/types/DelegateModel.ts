import { jsonMember, jsonObject } from 'typedjson';
import Renderer from '../../markdown/Renderer';
import Renderable from '../Renderable';
import CommonComment from '../written/CommonComment';
import TypeModel from './TypeModel';

@jsonObject()
export default class DelegateModel extends TypeModel<CommonComment> implements Renderable {  
  @jsonMember(String, { name: 'ReturnType' })
  returnType: string;

  render(renderer: Renderer): void {
    renderer.renderDelegate(this)
  }
}
