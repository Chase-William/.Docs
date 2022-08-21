import { jsonMember, jsonObject } from "typedjson"
import CommonComment from "./CommonComment"

@jsonObject()
export default class TypeComment extends CommonComment {
  @jsonMember(String, { name: 'Parameters' })
  parameters: string[]
}