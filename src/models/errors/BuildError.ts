import { jsonMember, jsonObject } from "typedjson"

@jsonObject()
export default class BuildError
{
  @jsonMember(Date, { name: "Timestamp" })
  timestamp: Date
  @jsonMember(String, { name: "Code" })
  code: string
  @jsonMember(Number, { name: "ColumnNumber" })
  columnNumber: number
  @jsonMember(Number, { name: "EndColumnNumber" })
  endColumnNumber: number
  @jsonMember(Number, { name: "EndLineNumber" })
  endLineNumber: number
  @jsonMember(String, { name: "File" })
  file: string
  @jsonMember(Number, { name: "LineNumber" })
  lineNumber: number
  @jsonMember(String, { name: "ProjectFile" })
  projectFile: string
  @jsonMember(String, { name: "Subcategory" })
  subcategory: string
}