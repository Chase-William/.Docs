import IAmTypeModel from "./IAmFullTypeModel"

export default interface IAmParameterModel {
  name: string | null
  type: IAmTypeModel
}