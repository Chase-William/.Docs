import { JsonProperty } from 'typescript-json-serializer';
import FieldModel from '../members/FieldModel';
import CommonComment from '../written/CommonComment';
import TypeModel from './TypeModel';

export default class EnumModel extends TypeModel<CommonComment> {
  @JsonProperty({ name: 'Fields' })
  fields: FieldModel[];

  @JsonProperty({ name: 'UnderlyingType' })
  underlyingType: boolean;
}
