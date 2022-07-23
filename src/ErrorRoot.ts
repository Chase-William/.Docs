import { jsonArrayMember, jsonObject } from "typedjson";

@jsonObject()
export default class ErrorRoot
{
  @jsonArrayMember(Error, { name: "Errors" })
  errors: Error[]
}