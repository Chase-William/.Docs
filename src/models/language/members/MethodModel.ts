import { jsonArrayMember, jsonMember, jsonObject } from 'typedjson';
import IAmMethodModel from '../../interfaces/IAmMethodModel';
import MethodComment from '../../written/MethodComment';
import ParameterModel from '../ParameterModel';
import MemberModel from './MemberModel';

@jsonObject()
export default class MethodModel extends MemberModel<MethodComment> implements IAmMethodModel {
  @jsonMember(ParameterModel, { name: 'ReturnParameter' })
  returnParameter: ParameterModel
  @jsonArrayMember(ParameterModel, { name: 'Parameters' })
  parameters: ParameterModel[]
  
  @jsonMember(Boolean, { name: 'IsAbstract' })
  isAbstract: boolean;
  @jsonMember(Boolean, { name: 'IsVirtual' })
  isVirtual: boolean;
}
