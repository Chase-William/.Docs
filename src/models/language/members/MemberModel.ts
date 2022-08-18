import { jsonMember, jsonObject } from 'typedjson';
import IAmSingletonable from '../../interfaces/IAmSingletonable';
import CommonComment from '../../written/CommonComment';
import AccessibilityModel from '../AccessibilityModel';

@jsonObject()
export default class MemberModel<T extends CommonComment> extends AccessibilityModel implements IAmSingletonable {  
  @jsonMember(CommonComment, { name: 'Comments' })
  comments: T;
  @jsonMember(Boolean, { name: 'IsStatic' })
  isStatic: boolean;  
}
