import { readdirSync } from "fs";
import path = require("path");
import { jsonArrayMember, jsonMember, jsonObject } from "typedjson";
import RenderManager from "../../renderer/RenderManager";
import Namespace from "../Namespace";
import AssemblyDefinition from "./AssemblyDefinition";

@jsonObject()
export default class ProjectDefinition {
  static getPrimaryKey: (def: ProjectDefinition) => string

  @jsonMember(String, { name: 'ProjectName' })
  projectName: string
  @jsonMember(String, { name: 'ProjectDirectory' })
  projectDirectory: string
  @jsonMember(String, { name: 'ProjectFileName' })
  projectFileName: string
  @jsonMember(String, { name: 'ProjectPath' })
  projectPath: string
  @jsonArrayMember(String, { name: 'LocalProjectDependencies' })
  foreignKeysOfLocalProjects = new Array<string>()

  /**
   * A reference to the assembly definition this project creates.
   */
  assembly: AssemblyDefinition

  /**
   * A collection of local projects this project depends on.
   */
  localProjects = new Array<ProjectDefinition>()

  /**
   * The root node of the tree that is the codebase this project has.
   */
  codebase: Namespace

  loadCodebase(basePath: string): void {
    const projectCodebasePath = path.join(basePath, this.projectName)
    const entities = readdirSync(projectCodebasePath)
    if (entities.length > 1)
      throw new Error(`Attempting to load codebase for project: ${this.projectName} 
        and discovered multple root folders or files at ${projectCodebasePath}. 
        There should only be one entity at this level; the root folder (namespace).`);
    
    this.codebase = new Namespace(entities[0], null)
    this.codebase.parseChildren(projectCodebasePath, new Array<string>(), this.codebase)
  }

  render(renderManager: RenderManager): void {
    this.codebase.render(renderManager)
    this.localProjects.forEach(proj => proj.render(renderManager))
  }
}