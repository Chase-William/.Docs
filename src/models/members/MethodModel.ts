import { jsonArrayMember, jsonMapMember, jsonMember, jsonObject } from 'typedjson';
import IAmPolymorphicable from '../interfaces/IAmPolymorphicable';
import IHaveSignature from '../interfaces/IHaveSignature';
import { Parameter } from '../Parameter';
import MethodComment from '../written/MethodComment';
import MemberModel from './MemberModel';

@jsonObject()
export default class MethodModel extends MemberModel<MethodComment> implements IAmPolymorphicable, IHaveSignature {
  @jsonMember(String, { name: 'ReturnType' })
  returnType: string;
  @jsonArrayMember(Parameter, { name: 'Parameters' })
  parameters: Parameter[];
  @jsonMember(Boolean, { name: 'IsAbstract' })
  isAbstract: boolean;
  @jsonMember(Boolean, { name: 'IsVirtual' })
  isVirtual: boolean;
}
