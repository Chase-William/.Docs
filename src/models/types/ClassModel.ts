import { JsonObject, JsonProperty } from "typescript-json-serializer"
import FieldModel from "../members/FieldModel"
import EventModel from "../members/EventModel"
import PropertyModel from "../members/PropertyModel"
import ModelNestable from "../ModelNestable"
import CommonComment from "../written/CommonComment"
import MethodModel from "../members/MethodModel"

@JsonObject()
export default class ClassModel extends ModelNestable<CommonComment> {
  @JsonProperty({name: 'IsPublic'})
  isPublic: boolean
  // canHaveInternalTypes: true
  // type: "class"
  @JsonProperty({name: 'Properties'})
  properties: PropertyModel[]
  @JsonProperty({name: 'Fields'})
  fields: FieldModel[]
  @JsonProperty({name: 'Methods'})
  methods: MethodModel[]
  @JsonProperty({name: 'Events'})
  events: EventModel[]
}