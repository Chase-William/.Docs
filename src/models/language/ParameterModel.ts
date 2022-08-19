import { jsonMember, jsonObject } from "typedjson";
import IAmParameterModel from "./interfaces/IAmParameterModel";
import IAmTypeModel from "./interfaces/IAmTypeModel";

@jsonObject()
export default class ParameterModel implements IAmParameterModel {
  @jsonMember(String, { name: 'Name' })
  name: string = null

  @jsonMember(String, { name: 'Type' })
  _type: string
  type: IAmTypeModel

  bind(types: Map<string, IAmTypeModel>): void {
    this.type = types.get(this._type)
  }
}