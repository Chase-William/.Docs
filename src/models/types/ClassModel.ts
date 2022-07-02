import { jsonMember, jsonObject } from 'typedjson';
import RenderManager from '../../renderer/RenderManager';
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

  render(renderManager: RenderManager): void {
    renderManager.renderClass(this)

    this.childNodes.forEach((model) => {
      (model as Renderable).render(renderManager)
    })
  }  
}
