import { jsonMember, jsonObject } from 'typedjson';

@jsonObject()
export default class InheritDocTag {
  @jsonMember(String, { name: 'Cref' })
  cRef: string;
}
