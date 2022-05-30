import { jsonMember, jsonObject } from 'typedjson';
import InheritDocTag from './InheritDocTag';

@jsonObject()
export default class CommonComment {
  @jsonMember(String, { name: 'Summary' })
  summary: string;
  @jsonMember(String, { name: 'Remarks' })
  remarks: string;
  @jsonMember(String, { name: 'Example' })
  example: string;
  @jsonMember(InheritDocTag, { name: 'Inheritdoc' })
  inheritdoc: InheritDocTag;
}
