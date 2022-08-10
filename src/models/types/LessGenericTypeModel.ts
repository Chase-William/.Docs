import { jsonArrayMember, jsonObject } from "typedjson";
import IHaveNestableTypes, { parseChildrenImplementation } from '../interfaces/IHaveNestableTypes';
import EventModel from "../members/EventModel";
import FieldModel from "../members/FieldModel";
import MethodModel from "../members/MethodModel";
import PropertyModel from "../members/PropertyModel";
import Model from "../Model";
import CommonComment from "../written/CommonComment";
import TypeModel from "./TypeModel";
import IAmRenderable from "../interfaces/IAmRenderable";
import RenderManager from "../../renderer/RenderManager";
import IHaveProperties from "../interfaces/IHaveProperties";
import IHaveEvents from "../interfaces/IHaveEvents";
import IHaveFields from "../interfaces/IHaveFields";
import IHaveMethods from "../interfaces/IHaveMethods";

/**
 * Represents any <type> that can contain the following:
 * - Fields
 * - Properties
 * - Methods
 * - Events
 * - Children Types
 */
@jsonObject()
export default class LessGenericTypeModel 
  extends TypeModel<CommonComment> 
  implements IHaveNestableTypes, 
             IHaveProperties, 
             IHaveEvents, 
             IHaveFields, 
             IHaveMethods 
{
  children = new Map<string, (Model | IHaveNestableTypes) & IAmRenderable>()
  
  @jsonArrayMember(PropertyModel, { name: 'Properties' })
  properties: PropertyModel[];
  @jsonArrayMember(FieldModel, { name: 'Fields' })
  fields: FieldModel[];
  @jsonArrayMember(MethodModel, { name: 'Methods' })
  methods: MethodModel[];
  @jsonArrayMember(EventModel, { name: 'Events' })
  events: EventModel[];

  parseChildren(extraPathing: string, namespaces: string[], model: Model & IHaveNestableTypes): void {
    parseChildrenImplementation(extraPathing, namespaces, model)
  }

  renderChildren(renderManager: RenderManager) {
    this.children.forEach((model) => {
      (model as IAmRenderable).render(renderManager)
    })
  }
}