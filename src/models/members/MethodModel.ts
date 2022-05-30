import { jsonMapMember, jsonMember, jsonObject } from 'typedjson';
import MethodComment from '../written/MethodComment';
import MemberModel from './MemberModel';

@jsonObject()
export default class MethodModel extends MemberModel<MethodComment> {
  @jsonMember(String, { name: 'ReturnType' })
  returnType: string;
  @jsonMapMember(String, String, { name: 'Parameters' })
  parameters: Map<string, string>;
}
