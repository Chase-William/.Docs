import { jsonObject } from 'typedjson';
import Renderer from '../../markdown/Renderer';
import Renderable from '../Renderable';
import StandardMembersModel from './StandardMembersModel';

@jsonObject()
export default class InterfaceModel extends StandardMembersModel implements Renderable {
  render(renderer: Renderer): void {
    renderer.renderInterface(this)  
    this.renderChildren(renderer) 
  }    
}
