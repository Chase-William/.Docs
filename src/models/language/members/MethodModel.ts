import { jsonArrayMember, jsonMember, jsonObject } from 'typedjson';
import MethodComment from '../../comments/MethodComment';
import ParameterModel from '../ParameterModel';
import MemberModel from './MemberModel';
import IAmMethodModel from '../interfaces/members/IAmMethodModel';
import IAmFullTypeModel from '../interfaces/IAmFullTypeModel';
import IAmProjectManager from '../../../ProjectManager';

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

  bind(projManager: IAmProjectManager): void {
    // Bind return parameter
    this.returnParameter.bind(projManager)
    // Bind pamaraters
    this.parameters.forEach(param => param.bind(projManager))
    super.bind(projManager)
  }
}
