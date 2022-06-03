import { jsonMember, jsonObject } from 'typedjson';
import Renderer from '../../markdown/Renderer';
import Model from '../Model';
import Renderable from '../Renderable';
import StandardMembersModel from './StandardMembersModel';

@jsonObject()
export default class ClassModel extends StandardMembersModel implements Renderable {
  @jsonMember(Boolean, { name: 'IsPublic' })
  isPublic: boolean;

  render(renderer: Renderer): void {
    renderer.renderClass(this)

    this.childNodes.forEach((model, key) => {
      (model as Renderable).render(renderer)
    })
  }  
}
