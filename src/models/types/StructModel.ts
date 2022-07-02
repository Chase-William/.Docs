import { jsonObject } from 'typedjson';
import RenderManager from '../../renderer/RenderManager';
import Renderable from '../Renderable';
import StandardMembersModel from './StandardMembersModel';

@jsonObject()
export default class StructModel extends StandardMembersModel implements Renderable {
  
  
  render(renderManager: RenderManager): void {
    renderManager.renderStruct(this)
    this.renderChildren(renderManager) 
  }
}
