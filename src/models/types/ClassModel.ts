import { jsonMember, jsonObject } from 'typedjson';
import StructureModel from './StructureModel';

@jsonObject()
export default class ClassModel extends StructureModel {
  @jsonMember(Boolean, { name: 'IsPublic' })
  isPublic: boolean;
}
