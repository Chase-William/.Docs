import { writeFile, existsSync, mkdirSync, rmdirSync, rmSync } from "fs";
import path = require("path");
import Configuration from "../models/config/Configuration";
import ClassModel from "../models/types/ClassModel";
import DelegateModel from "../models/types/DelegateModel";
import EnumModel from "../models/types/EnumModel";
import InterfaceModel from "../models/types/InterfaceModel";
import StructModel from "../models/types/StructModel";
import TypeModel from "../models/types/TypeModel";
import CommonComment from "../models/written/CommonComment";
import { getOptionalSummary } from "./CommentsRenderer";
import Renderer from "./Renderer";
import classRenderer from "./types/ClassRenderer";
import delegateRenderer from "./types/DelegateRenderer";
import enumRenderer from "./types/EnumRenderer";
import interfaceRenderer from "./types/InterfaceRenderer";
import structRenderer from "./types/StructRenderer";
import divider from "./Util";

/**
 * Implementation for rendering metadata/documentation to markdown. 
 */
export default class MarkdownRenderer implements Renderer {
  config: Configuration;
  path: string

  renderClass(model: ClassModel): void {
    let content = ''
    // if (model.isPublic && !this.config.type.class.showIfPublic)
    //   return
    // else if (model.isProtected && !this.config.type.class.showIfProtected)
    //   return
    // else if (model.isInternal && !this.config.type.class.showIfInternal)
    //   return
    // else if (model.isInternal && model.isProtected && !this.config.type.class.showIfInternalProtected)
    //   return
    // else if (model.ispr && !this.config.type.class.showIfPublic)
    //   return
    // else if (model.isPublic && !this.config.type.class.showIfPublic)
    //   return
    // Header
    content += classRenderer(model)
    writeMarkdownToFile(this.path, model, content)
  }

  renderDelegate(model: DelegateModel): void {
    let content = ''
    content = renderTypeHeader(model)
    content += delegateRenderer(model)
    writeMarkdownToFile(this.path, model, content)
  }

  renderEnum(model: EnumModel): void {
    let content = ''
    // Header
    content = renderTypeHeader(model)
    content += enumRenderer(model) 
    writeMarkdownToFile(this.path, model, content)
  }

  renderInterface(model: InterfaceModel): void {
    let content = ''
    // Header
    content = renderTypeHeader(model)
    content += interfaceRenderer(model) 
    writeMarkdownToFile(this.path, model, content)
  }

  renderStruct(model: StructModel): void {
    let content = ''
    // Header
    content = renderTypeHeader(model)
    content += structRenderer(model) 
    writeMarkdownToFile(this.path, model, content)
  }
}

export function renderTypeHeader(model: TypeModel<CommonComment>): string {
  return (
    `# ${model.name} \`${model.type}\`` +
    divider() +
    getOptionalSummary(model.comments) +
    divider()
  )
}

/**
 * Writes markdown provided to file. This functional determines the folder/file structure.
 * @param model Contains the information required for path/file location.
 * @param content Markdown content to be written.
 */
function writeMarkdownToFile(basePath: string, model: TypeModel<CommonComment>, content: string): void {
  basePath = path.join(basePath, getDirectory(model.fullName))
  
  // Build
  if (!existsSync(basePath)) {
    mkdirSync(basePath, { recursive: true })
  }

  // Write to file using the FullName prop because we may need parent class names if this type is nested.
  writeFile(basePath + `/${model.fullName.substring(model.fullName.lastIndexOf('.') + 1)}.md`, content, (err) => {
    if (err) {
      console.log(err) // TODO: Change to logger later
      throw err
    }      
  })
}

/**
 * Gets the directory of a model via it's namespace location.
 * @param namespace Location of the type.
 * @returns Directory that resembles the namespace location, but with the top level namespace and type itself omitted.
 */
function getDirectory(namespace: string): string {
  const names = namespace.split('.')
  return names.slice(1, names.length - 1).join('/')
}