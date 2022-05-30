import { jsonMapMember, jsonMember, jsonObject } from 'typedjson';
import CommonComment from './CommonComment';

@jsonObject()
export default class MethodComment extends CommonComment {
  @jsonMapMember(String, String, { name: 'Parameters' })
  parameters: Map<string, string>;
  @jsonMember(String, { name: 'Returns' })
  returns: string;
  @jsonMapMember(String, String, { name: 'Responses' })
  responses: Map<string, string>;
  @jsonMapMember(String, String, { name: 'TypeParmeter' })
  typeParameter: Map<string, string>;
}
