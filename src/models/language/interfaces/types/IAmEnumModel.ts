import IAmFieldModel from "../members/IAmFieldModel";
import IAmSlicedTypeModel from "./IAmSlicedTypeModel";

export default interface IAmEnumModel extends IAmSlicedTypeModel {
  fields: IAmFieldModel[]
}