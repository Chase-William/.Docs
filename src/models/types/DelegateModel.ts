import { jsonArrayMember, jsonMember, jsonObject } from 'typedjson';
import Renderer from '../../markdown/Renderer';
import Renderable from '../Renderable';
import CommonComment from '../written/CommonComment';
import TypeModel from './TypeModel';

@jsonObject()
export class Parameter {
  @jsonMember(String, { name: 'Name' })
  name: string;

  @jsonMember(String, { name: 'Type' })
  type: string;
}

@jsonObject()
export default class DelegateModel extends TypeModel<CommonComment> implements Renderable {  
  @jsonMember(String, { name: 'ReturnType' })
  returnType: string;

  @jsonArrayMember(Parameter, { name: 'Parameters' })
  parameters: Parameter[]

  render(renderer: Renderer): void {
    renderer.renderDelegate(this)
  }
}
