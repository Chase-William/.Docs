import { jsonMember, jsonObject } from "typedjson";
import IAmParameterModel from "./interfaces/IAmParameterModel";
import IAmTypeModel from "./interfaces/IAmFullTypeModel";
import IAmProjectManager from "../../ProjectManager";

@jsonObject()
export default class ParameterModel implements IAmParameterModel {
  @jsonMember(String, { name: 'Name' })
  name: string = null

  @jsonMember(String, { name: 'Type' })
  _type: string
  type: IAmTypeModel

  bind(projManager: IAmProjectManager): void {
    this.type = projManager.getTypeChecked(this._type)
  }
}