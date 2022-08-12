import PropertyModel from "../members/PropertyModel";
import Model from "../Model";

export default interface IHaveProperties {
  properties: PropertyModel[]
}

export function setParentForProperties(model: IHaveProperties & Model) {
  model.properties.forEach(property => property.parent = model)
}