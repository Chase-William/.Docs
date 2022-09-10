import { jsonMember, jsonObject } from 'typedjson';
import IAmEventModel from '../interfaces/members/IAmEventModel';
import CommonComment from '../../comments/CommonComment';
import MemberModel from './MemberModel';
import IAmProjectManager from '../../../ProjectManager';

@jsonObject()
export default class EventModel extends MemberModel<CommonComment> implements IAmEventModel {
  @jsonMember(Boolean, { name: 'IsAbstract' })
  isAbstract: boolean;
  @jsonMember(Boolean, { name: 'IsVirtual' })
  isVirtual: boolean;

  bind(projManager: IAmProjectManager): void {
    super.bind(projManager)
  }
}
