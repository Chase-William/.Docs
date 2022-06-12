import StandardMembersModel from "../../models/types/StandardMembersModel"
import renderEvents from "../members/EventRenderer"
import renderFields from "../members/FieldRenderer"
import renderMethods from "../members/MethodRenderer"
import renderProperty from "../members/PropertyRenderer"

export default function standardMembersRenderer(model: StandardMembersModel): string {
  let content = ''

  // Members
  /// Properties
  if (model.properties.length > 0) {
    content += renderProperty(model.properties)
  }    
  /// Methods
  if (model.methods.length > 0) {
    content += renderMethods(model.methods)
  }    
  /// Events
  if (model.events.length > 0) {
    content += renderEvents(model.events)
  }    
  /// Fields
  if (model.fields.length > 0) {
    content += renderFields(model.fields)
  } 

  return content
}