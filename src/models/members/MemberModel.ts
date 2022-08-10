import { jsonMember, jsonObject } from 'typedjson';
import AccessibilityModel from '../AccessibilityModel';
import IAmSingletonable from '../interfaces/IAmSingletonable';
import CommonComment from '../written/CommonComment';

@jsonObject()
export default class MemberModel<T extends CommonComment> extends AccessibilityModel implements IAmSingletonable {
  @jsonMember(CommonComment, { name: 'Comments' })
  comments: T;
  @jsonMember(Boolean, { name: 'IsStatic' })
  isStatic: boolean;  
}
