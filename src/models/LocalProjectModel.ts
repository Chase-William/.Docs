import { jsonArrayMember, jsonMember, jsonObject } from "typedjson"

@jsonObject()
export default class LocalProjectModel {
  @jsonMember(String, { name: 'ProjectName' })
  projectName: string
  @jsonMember(String, { name: 'ProjectDirectory' })
  projectDirectory: string
  @jsonMember(String, { name: 'ProjectFileName' })
  projectFileName: string
  @jsonMember(String, { name: 'ProjectPath' })
  projectPath: string
  @jsonArrayMember(String, { name: 'LocalProjects' })
  localPrjects: string[]
}