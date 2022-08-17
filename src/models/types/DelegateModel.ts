import { jsonArrayMember, jsonMember, jsonObject } from 'typedjson';
import RenderManager from '../../renderer/RenderManager';
import IAmRenderable from '../interfaces/IAmRenderable';
import IHaveSignature from '../interfaces/IHaveSignature';
import TypeKey from '../TypeKey';
import TypeKeyParameter from '../TypeKeyParameter';
import CommonComment from '../written/CommonComment';
import TypeModel from './TypeModel';

@jsonObject()
export default class DelegateModel extends TypeModel<CommonComment> implements IAmRenderable, IHaveSignature {  
  @jsonMember(TypeKey, { name: 'ReturnType' })
  returnType: TypeKey;

  @jsonArrayMember(TypeKeyParameter, { name: 'Parameters' })
  parameters: TypeKeyParameter[]

  render(renderManager: RenderManager): void {
    renderManager.renderDelegate(this)
  }
}
