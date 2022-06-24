import StandardMembersModel from "../../models/types/StandardMembersModel"
import eventRenderer from "../members/EventRenderer"
import fieldRenderer from "../members/FieldRenderer"
import methodRenderer from "../members/MethodRenderer"
import propertyRenderer from "../members/PropertyRenderer"
import divider, { optionalDivider } from "../Util"

export default function standardMembersRenderer(model: StandardMembersModel): string {
  let content = ''

  // Members
  /// Properties
  if (model.properties.length > 0) {
    content += (
      propertyRenderer(model.properties) +
      optionalDivider(model.methods)
    )
  }    
  /// Methods
  if (model.methods.length > 0) {
    content += (
      methodRenderer(model.methods) +
      optionalDivider(model.events)
    )
  }    
  /// Events
  if (model.events.length > 0) {
    content += (
      eventRenderer(model.events) +
      optionalDivider(model.fields)
    )
  }    
  /// Fields
  if (model.fields.length > 0) {
    content += fieldRenderer(model.fields)
  } 

  return content
}