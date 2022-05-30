import { jsonArrayMember, jsonMember, jsonObject } from "typedjson";
import EventModel from "../members/EventModel";
import FieldModel from "../members/FieldModel";
import MethodModel from "../members/MethodModel";
import PropertyModel from "../members/PropertyModel";
import CommonComment from "../written/CommonComment";
import TypeModel from "./TypeModel";

/**
 * Represents any <type> that can contain the following members:
 * - Fields
 * - Properties
 * - Methods
 * - Events
 */
@jsonObject()
export default class StandardMembersModel extends TypeModel<CommonComment> {
  @jsonArrayMember(PropertyModel, { name: 'Properties' })
  properties: PropertyModel[];
  @jsonArrayMember(FieldModel, { name: 'Fields' })
  fields: FieldModel[];
  @jsonArrayMember(MethodModel, { name: 'Methods' })
  methods: MethodModel[];
  @jsonArrayMember(EventModel, { name: 'Events' })
  events: EventModel[];
}