import { jsonArrayMember, jsonMember, jsonObject } from 'typedjson';
import Renderer from '../../markdown/Renderer';
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

  render(renderer: Renderer): void {
    renderer.renderEnum(this)
  }
}
