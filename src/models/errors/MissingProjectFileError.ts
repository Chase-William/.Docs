import { jsonMember, jsonObject } from "typedjson"

@jsonObject()
export default class BuildError
{
  @jsonMember(Date, { name: "ProjectFile" })
  projectFile: string
}