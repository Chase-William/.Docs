import { jsonMember, jsonObject } from 'typedjson';
import RenderManager from '../../renderer/RenderManager';
import IAmRenderable from '../interfaces/IAmRenderable';
import LessGenericTypeModel from './LessGenericTypeModel';

@jsonObject()
export default class ClassModel extends LessGenericTypeModel implements IAmRenderable {
  @jsonMember(Boolean, { name: 'IsSealed'})
  isSealed: boolean
  @jsonMember(Boolean, { name: 'IsAbstract' })
  isAbstract: boolean
  @jsonMember(Boolean, { name: 'IsStatic' })
  isStatic: boolean

  render(renderManager: RenderManager): void {
    renderManager.renderClass(this)

    this.children.forEach((model) => {
      (model as IAmRenderable).render(renderManager)
    })
  }  
}
