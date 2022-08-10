import { jsonObject } from 'typedjson';
import RenderManager from '../../renderer/RenderManager';
import IAmRenderable from '../interfaces/IAmRenderable';
import LessGenericTypeModel from './LessGenericTypeModel';

@jsonObject()
export default class InterfaceModel extends LessGenericTypeModel implements IAmRenderable {
  render(renderManager: RenderManager): void {
    renderManager.renderInterface(this)  
    this.renderChildren(renderManager) 
  }    
}
