import { jsonArrayMember, jsonMember, jsonObject } from 'typedjson';
import IAmPolymorphicable from '../interfaces/IAmPolymorphicable';
import IHaveSignature from '../interfaces/IHaveSignature';
import TypeKey from '../TypeKey';
import TypeKeyParameter from '../TypeKeyParameter';
import MethodComment from '../written/MethodComment';
import MemberModel from './MemberModel';

@jsonObject()
export default class MethodModel extends MemberModel<MethodComment> implements IAmPolymorphicable, IHaveSignature {
  @jsonMember(TypeKey, { name: 'ReturnType' })
  returnType: TypeKey;
  @jsonArrayMember(TypeKeyParameter, { name: 'Parameters' })
  parameters: TypeKeyParameter[];
  @jsonMember(Boolean, { name: 'IsAbstract' })
  isAbstract: boolean;
  @jsonMember(Boolean, { name: 'IsVirtual' })
  isVirtual: boolean;
}
