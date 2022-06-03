import { jsonMember, jsonObject } from 'typedjson';
import Renderer from '../../markdown/Renderer';
import Renderable from '../Renderable';
import StandardMembersModel from './StandardMembersModel';

@jsonObject()
export default class StructModel extends StandardMembersModel implements Renderable {
  render(renderer: Renderer): void {
    renderer.renderStruct(this)
    this.renderChildren(renderer) 
  }
}
