import { jsonObject } from 'typedjson';
import RenderManager from '../../renderer/RenderManager';
import Renderable from '../Renderable';
import StandardMembersModel from './StandardMembersModel';

@jsonObject()
export default class InterfaceModel extends StandardMembersModel implements Renderable {
  render(renderManager: RenderManager): void {
    renderManager.renderInterface(this)  
    this.renderChildren(renderManager) 
  }    
}
