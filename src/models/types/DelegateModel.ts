import { jsonMember, jsonObject } from 'typedjson';
import CommonComment from '../written/CommonComment';
import TypeModel from './TypeModel';

@jsonObject()
export default class DelegateModel extends TypeModel<CommonComment> {
  @jsonMember(String, { name: 'ReturnType' })
  returnType: string;
}
