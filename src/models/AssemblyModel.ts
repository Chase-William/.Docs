import { jsonMember, jsonObject } from "typedjson";
import LocalProjectModel from "./LocalProjectModel";

@jsonObject()
export default class AssemblyModel {
  @jsonMember(String, { name: 'Name' })
  name: string
  @jsonMember(String, { name: 'FullName' })
  fullName: string
  @jsonMember(String, { name: 'Id' })
  id: string

  project: LocalProjectModel | null = null
}