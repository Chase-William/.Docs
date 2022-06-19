import StandardMembersModel from "../../models/types/StandardMembersModel"
import eventRenderer from "../members/EventRenderer"
import fieldRenderer from "../members/FieldRenderer"
import methodRenderer from "../members/MethodRenderer"
import propertyRenderer from "../members/PropertyRenderer"
import divider from "../Util"

export default function standardMembersRenderer(model: StandardMembersModel): string {
  let content = ''

  // Members
  /// Properties
  if (model.properties.length > 0) {
    content += propertyRenderer(model.properties)
  }    
  /// Methods
  if (model.methods.length > 0) {
    content += divider() + methodRenderer(model.methods)
  }    
  /// Events
  if (model.events.length > 0) {
    content += divider() + eventRenderer(model.events)
  }    
  /// Fields
  if (model.fields.length > 0) {
    content += divider() + fieldRenderer(model.fields)
  } 

  return content
}