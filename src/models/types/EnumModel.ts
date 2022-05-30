import { jsonArrayMember, jsonMember, jsonObject } from 'typedjson';
import FieldModel from '../members/FieldModel';
import CommonComment from '../written/CommonComment';
import TypeModel from './TypeModel';

@jsonObject()
export default class EnumModel extends TypeModel<CommonComment> {
  @jsonArrayMember(FieldModel, { name: 'Fields' })
  fields: FieldModel[];

  @jsonMember(String, { name: 'UnderlyingType' })
  underlyingType: string;
}
