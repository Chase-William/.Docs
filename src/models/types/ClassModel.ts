import { jsonMember, jsonObject } from 'typedjson';
import Renderer from '../../markdown/Renderer';
import Model from '../Model';
import Renderable from '../Renderable';
import StandardMembersModel from './StandardMembersModel';

@jsonObject()
export default class ClassModel extends StandardMembersModel implements Renderable {
  @jsonMember(Boolean, { name: 'IsSealed'})
  isSealed: boolean

  @jsonMember(Boolean, { name: 'IsAbstract' })
  isAbstract: boolean

  @jsonMember(Boolean, { name: 'IsStatic' })
  isStatic: boolean

  render(renderer: Renderer): void {
    renderer.renderClass(this)

    this.childNodes.forEach((model, key) => {
      (model as Renderable).render(renderer)
    })
  }  
}
