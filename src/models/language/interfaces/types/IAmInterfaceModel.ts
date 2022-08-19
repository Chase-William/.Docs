import IAmEventModel from "../members/IAmEventModel"
import IAmFieldModel from "../members/IAmFieldModel"
import IAmMethodModel from "../members/IAmMethodModel"
import IAmPropertyModel from "../members/IAmPropertyModel"
import IAmSlicedTypeModel from "./IAmSlicedTypeModel"

export default interface IAmInterfaceModel extends IAmSlicedTypeModel {
  events: IAmEventModel[]
  fields: IAmFieldModel[]
  properties: IAmPropertyModel[]
  methods: IAmMethodModel[]
}