import { jsonObject } from 'typedjson';
import RenderManager from '../../renderer/RenderManager';
import IAmRenderable from '../interfaces/IAmRenderable';
import LessGenericTypeModel from './LessGenericTypeModel';
import TypeModel from './TypeModel';

@jsonObject()
export default class StructModel extends LessGenericTypeModel implements IAmRenderable {
  
  
  render(renderManager: RenderManager): void {
    renderManager.renderStruct(this)
    this.renderChildren(renderManager) 
  }
}
