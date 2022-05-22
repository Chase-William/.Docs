import { JsonObject, JsonProperty } from "typescript-json-serializer"
import TypeModel from "./TypeModel"
import MethodModel from "../members/MethodModel"
import FieldModel from "../members/FieldModel"
import EventModel from "../members/EventModel"
import PropertyModel from "../members/PropertyModel"
import CommonComment from "../written/CommonComment"

@JsonObject()
export default class ClassModel extends TypeModel<CommonComment> {
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