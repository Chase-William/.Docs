import { jsonArrayMember, jsonMember, jsonObject } from 'typedjson';
import RenderManager from '../../renderer/RenderManager';
import FieldModel from '../members/FieldModel';
import IAmRenderable from '../interfaces/IAmRenderable';
import CommonComment from '../written/CommonComment';
import TypeModel from './TypeModel';

@jsonObject()
export default class EnumModel extends TypeModel<CommonComment> implements IAmRenderable {
  @jsonArrayMember(FieldModel, { name: 'Fields' })
  fields: FieldModel[];

  @jsonMember(String, { name: 'UnderlyingType' })
  underlyingType: string;

  render(renderManager: RenderManager): void {
    renderManager.renderEnum(this)
  }
}
