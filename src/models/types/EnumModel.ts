import { jsonArrayMember, jsonMember, jsonObject } from 'typedjson';
import RenderManager from '../../renderer/RenderManager';
import FieldModel from '../members/FieldModel';
import Renderable from '../Renderable';
import CommonComment from '../written/CommonComment';
import TypeModel from './TypeModel';

@jsonObject()
export default class EnumModel extends TypeModel<CommonComment> implements Renderable {
  @jsonArrayMember(FieldModel, { name: 'Fields' })
  fields: FieldModel[];

  @jsonMember(String, { name: 'UnderlyingType' })
  underlyingType: string;

  render(renderManager: RenderManager): void {
    renderManager.renderEnum(this)
  }
}
