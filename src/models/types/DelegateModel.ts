import { jsonArrayMember, jsonMember, jsonObject } from 'typedjson';
import RenderManager from '../../renderer/RenderManager';
import IAmRenderable from '../interfaces/IAmRenderable';
import IHaveSignature from '../interfaces/IHaveSignature';
import { Parameter } from '../Parameter';
import CommonComment from '../written/CommonComment';
import TypeModel from './TypeModel';

@jsonObject()
export default class DelegateModel extends TypeModel<CommonComment> implements IAmRenderable, IHaveSignature {  
  @jsonMember(String, { name: 'ReturnType' })
  returnType: string;

  @jsonArrayMember(Parameter, { name: 'Parameters' })
  parameters: Parameter[]

  render(renderManager: RenderManager): void {
    renderManager.renderDelegate(this)
  }
}
