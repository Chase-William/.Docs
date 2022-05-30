import { jsonArrayMember, jsonObject } from "typedjson";
import INestable, { readChildrenInternal } from '../INestable';
import EventModel from "../members/EventModel";
import FieldModel from "../members/FieldModel";
import MethodModel from "../members/MethodModel";
import PropertyModel from "../members/PropertyModel";
import Model from "../Model";
import CommonComment from "../written/CommonComment";
import TypeModel from "./TypeModel";

/**
 * Represents any <type> that can contain the following:
 * - Fields
 * - Properties
 * - Methods
 * - Events
 * - Children Types
 */
@jsonObject()
export default class StandardMembersModel extends TypeModel<CommonComment> implements INestable {
  childNodes = new Map<string, Model | INestable>()
  
  @jsonArrayMember(PropertyModel, { name: 'Properties' })
  properties: PropertyModel[];
  @jsonArrayMember(FieldModel, { name: 'Fields' })
  fields: FieldModel[];
  @jsonArrayMember(MethodModel, { name: 'Methods' })
  methods: MethodModel[];
  @jsonArrayMember(EventModel, { name: 'Events' })
  events: EventModel[];

  readChildren(namespaces: string[], model: Model & INestable): void {
    readChildrenInternal(namespaces, model)
  }
}