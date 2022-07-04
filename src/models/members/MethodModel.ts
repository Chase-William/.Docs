import { jsonArrayMember, jsonMapMember, jsonMember, jsonObject } from 'typedjson';
import PolymorphicModelable from '../interfaces/PolymophicModelable';
import MethodComment from '../written/MethodComment';
import MemberModel from './MemberModel';

@jsonObject
export class Parameter {
  @jsonMember(String, { name: 'Name' })
  name: string;
  @jsonMember(String, { name: 'Type' })
  type: string;
}

@jsonObject()
export default class MethodModel extends MemberModel<MethodComment> implements PolymorphicModelable {
  @jsonMember(String, { name: 'ReturnType' })
  returnType: string;
  @jsonArrayMember(Parameter, { name: 'Parameters' })
  parameters: Parameter[];
  @jsonMember(Boolean, { name: 'IsAbstract' })
  isAbstract: boolean;
  @jsonMember(Boolean, { name: 'IsVirtual' })
  isVirtual: boolean;
}
