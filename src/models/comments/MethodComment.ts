import { jsonArrayMember, jsonMapMember, jsonMember, jsonObject } from 'typedjson';
import CommonComment from './CommonComment';

@jsonObject()
export class PararmeterComment {
  @jsonMember(String, { name: 'Name' })
  name: string
  @jsonMember(String, { name: 'Text' })
  text: string
}

@jsonObject()
export class ReponseComment {
  @jsonMember(String, { name: 'Code' })
  name: string
  @jsonMember(String, { name: 'Text' })
  text: string
}

@jsonObject()
export default class MethodComment extends CommonComment {
  @jsonArrayMember(PararmeterComment, { name: 'Parameters' })
  parameters: PararmeterComment[];
  @jsonMember(String, { name: 'Returns' })
  returns: string;
  @jsonArrayMember(ReponseComment, { name: 'Responses' })
  responses: ReponseComment[];
  @jsonArrayMember(PararmeterComment, { name: 'TypeParmeter' })
  typeParameter: PararmeterComment[];
}