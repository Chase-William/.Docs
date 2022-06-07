import { writeFile, existsSync, mkdirSync } from "fs";
import EventModel from "../models/members/EventModel";
import FieldModel from "../models/members/FieldModel";
import MethodModel from "../models/members/MethodModel";
import PropertyModel from "../models/members/PropertyModel";
import ClassModel from "../models/types/ClassModel";
import DelegateModel from "../models/types/DelegateModel";
import EnumModel from "../models/types/EnumModel";
import InterfaceModel from "../models/types/InterfaceModel";
import StandardMembersModel from "../models/types/StandardMembersModel";
import StructModel from "../models/types/StructModel";
import TypeModel from "../models/types/TypeModel";
import CommonComment from "../models/written/CommonComment";
import Renderer from "./Renderer";

/**
 * Implementation for rendering metadata/documentation to markdown. 
 */
export default class MarkdownRenderer implements Renderer {
  useDefaultFileStructure = true

  renderClass(model: ClassModel): void {
    console.log(`Class - Rendering: ${model.fullName}`)

    let content: string

    // Header
    content = renderTypeHeader(model)
    content += renderStandardMemberModel(model) 
    writeMarkdownToFile(model, content)
  }
  renderDelegate(model: DelegateModel): void {
    console.log(`Delegate - Rendering: ${model.fullName}`)

    let content: string
    content = renderTypeHeader(model)
    content += renderDelegate(model)

    writeMarkdownToFile(model, content)
  }
  renderEnum(model: EnumModel): void {
    console.log(`Enum - Rendering: ${model.fullName}`)
    let content: string

    // Header
    content = renderTypeHeader(model)
    content += renderEnum(model) 
    writeMarkdownToFile(model, content)
  }
  renderInterface(model: InterfaceModel): void {
    console.log(`Interface - Rendering: ${model.fullName}`)
    let content: string

    // Header
    content = renderTypeHeader(model)
    content += renderStandardMemberModel(model) 
    writeMarkdownToFile(model, content)
  }
  renderStruct(model: StructModel): void {
    console.log(`Struct - Rendering: ${model.fullName}`)
    let content: string

    // Header
    content = renderTypeHeader(model)
    content += renderStandardMemberModel(model) 
    writeMarkdownToFile(model, content)
  }
}

function renderStandardMemberModel(model: StandardMembersModel): string {
  let content: string
  // Members
  /// Properties
  if (model.properties.length > 0) {
    content += renderProperty(model.properties)
  }    
  /// Methods
  if (model.methods.length > 0) {
    content += renderMethods(model.methods)
  }    
  /// Events
  if (model.events.length > 0) {
    content += renderEvents(model.events)
  }    
  /// Fields
  if (model.fields.length > 0) {
    content += renderFields(model.fields)
  } 

  return content
}

function renderTypeHeader(model: TypeModel<CommonComment>): string {
  return (
    `# \`${model.name}\`
    ${getOptionalSummary(model.comments)}`
  )
}

function renderEnum(model: EnumModel): string {
  let content = `\n\n### Values \`${model.underlyingType}\`\n`

  for (const value of model.fields) {
    content += `\n- ${value.name}${hasSummaryAndComment(model.comments) ? ', ' + getOptionalSummary(model.comments) : ''}`
  }

  return content
}

function hasSummaryAndComment(comments: CommonComment): boolean {
  return typeof comments?.summary != undefined && comments?.summary != null
}

function renderDelegate(model: DelegateModel): string {
  return `\n*@returns* \`${model.returnType}\``
}

function renderFields(fields: FieldModel[]): string {
  let content = (
    `\n\n## Fields\n| Name | Type | Summary |\n| ---- | ---- | ------- |\n`
  )
  
  for (const field of fields) {
    content += (
      `|${field.name}|\`${field.type}\`|${getOptionalSummary(field.comments)}|\n`
    )
  }  

  return content
}

function getOptionalSummary(comments: CommonComment) {
  // if (typeof comments == 'undefined' || comments === null) {
  //   return ''
  // }
  if (comments?.summary) {
    return comments.summary
  }
  return 'Summary not provided.'
}

function renderEvents(events: EventModel[]): string {
  let content = (
    `\n\n## Events\n| Name | Type | Summary |\n| ---- | ---- | ------- |\n`
  )
  
  for (const event of events) {
    content += (
      `|${event.name}|\`${event.type}\`|${getOptionalSummary(event.comments)}|\n`
    )
  }  

  return content
}

function renderMethods(methods: MethodModel[]): string {
  let content = (
    `\n\n## Methods`
  )
  
  for (const method of methods) {

    content += `\n\n### ${method.name}\n${getOptionalSummary(method.comments)}`

    method.parameters.forEach(param => {
      content += `\n*@param* \`${param}\`\n`
    })
  }  

  return content
}

function renderProperty(properties: PropertyModel[]): string {
  let content = (
    `\n\n## Properties\n| Name | Type | Summary |\n| ---- | ---- | ------- |\n`
  )
  
  for (const prop of properties) {
    content += (
      `|${prop.name}|\`${prop.type}\`|${getOptionalSummary(prop.comments)}|\n`
    )
  }  

  return content
}


// function getDirectory(namespace: string): string {
//   return namespace.replace(/\./g, '/')
// }

/**
 * Writes markdown provided to file. This functional determines the folder/file structure.
 * @param model Contains the information required for path/file location.
 * @param content Markdown content to be written.
 */
function writeMarkdownToFile(model: TypeModel<CommonComment>, content: string): void {
  const path = 'docs/' + getDirectory(model.fullName)

  if (!existsSync(path)) {
    mkdirSync(path, { recursive: true })
  }

  writeFile(path + `/${model.name}.md`, content, (err) => {
    if (err) {
      console.log(err)
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