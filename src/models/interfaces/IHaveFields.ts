import FieldModel from "../members/FieldModel";
import Model from "../Model";

export default interface IHaveFields {
  fields: FieldModel[]
}

export function setParentForFields(model: IHaveFields & Model) {
  model.fields.forEach(field => field.parent = model)
}