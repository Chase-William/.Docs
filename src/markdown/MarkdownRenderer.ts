import { existsSync, mkdirSync, writeFile } from "fs";
import EventConfigModel from "../models/config/members/EventConfigModel";
import FieldConfigModel from "../models/config/members/FieldConfigModel";
import MethodConfigModel from "../models/config/members/MethodConfigModel";
import PropertyConfigModel from "../models/config/members/PropertyConfigModel";
import ClassConfigModel from "../models/config/types/ClassConfigModel";
import DelegateConfigModel from "../models/config/types/DelegateConfigModel";
import EnumConfigModel from "../models/config/types/EnumConfigModel";
import InterfaceConfigModel from "../models/config/types/InterfaceConfigModel";
import StructConfigModel from "../models/config/types/StructConfigModel";
import { IGlobalMetaMap } from "../models/global/MapperManager";
import EventModel from "../models/members/EventModel";
import FieldModel from "../models/members/FieldModel";
import MethodModel from "../models/members/MethodModel";
import PropertyModel from "../models/members/PropertyModel";
import ClassModel from "../models/types/ClassModel";
import DelegateModel from "../models/types/DelegateModel";
import EnumModel from "../models/types/EnumModel";
import InterfaceModel from "../models/types/InterfaceModel";
import StructModel from "../models/types/StructModel";
import TypeModel from "../models/types/TypeModel";
import CommonComment from "../models/written/CommonComment";
import Renderer from "../renderer/Renderer";
import { renderEvent } from "./members/EventRenderer";
import { renderField } from "./members/FieldRenderer";
import { renderMethod } from "./members/MethodRenderer";
import PropertyRenderer from "./members/PropertyRenderer";
import renderDelegate from "./types/DelegateRenderer";
import { renderValue } from "./types/EnumRenderer";
import divider, { renderTypeHeader } from "./Util";

export default class MarkdownRenderer implements Renderer {  
  content = '';
   
  beginRenderingClass(model: ClassModel, config: ClassConfigModel, map: IGlobalMetaMap): void {
    this.content = ''
    this.content += (
      renderTypeHeader(model, map)
    )
  }
  beginRenderingDelegate(model: DelegateModel, config: DelegateConfigModel, map: IGlobalMetaMap): void {
    this.content = ''
    this.content += (
      renderTypeHeader(model, map) +
      '\n' +
      renderDelegate(model)
    )
  }
  beginRenderingEnum(model: EnumModel, config: EnumConfigModel, map: IGlobalMetaMap): void {
    this.content = ''
    this.content += (
      renderTypeHeader(model, map)
    )
  }
  beginRenderingInterface(model: InterfaceModel, config: InterfaceConfigModel, map: IGlobalMetaMap): void {
    this.content = ''
    this.content += (
      renderTypeHeader(model, map)
    )
  }
  beginRenderingStruct(model: StructModel, config: StructConfigModel, map: IGlobalMetaMap): void {
    this.content = ''
    this.content += (
      renderTypeHeader(model, map)
    )
  }
  renderProperties(accessibility: string, properties: PropertyModel[], config: PropertyConfigModel, map: IGlobalMetaMap): void {    
    this.content +=  `## \`${accessibility}\` Properties` + divider()
    for (const prop of properties) {
      this.content += new PropertyRenderer(prop, config, map).content
    }
  }
  renderMethods(accessibility: string, methods: MethodModel[], config: MethodConfigModel, map: IGlobalMetaMap): void {
    this.content += divider() + `## \`${accessibility}\` Methods`
    for (const method of methods) {
      this.content += renderMethod(method, config)
    }
  }
  renderEvents(accessibility: string, events: EventModel[], config: EventConfigModel, map: IGlobalMetaMap): void {
    this.content += divider() + `## \`${accessibility}\` Events`
    for (const event of events) {
      this.content += renderEvent(event, config)
    }
  }
  renderFields(accessibility: string, fields: FieldModel[], config: FieldConfigModel, map: IGlobalMetaMap): void {
    this.content += divider() + `## \`${accessibility}\` Fields`
    for (const field of fields) {
      this.content += renderField(field, config)
    }
  }
  renderValues(model: EnumModel, values: FieldModel[]): void {
    this.content += (
      `## Values<\`${model.underlyingType}\`>` +
      divider()
    )
    for (const value of values) {
      this.content += renderValue(value)
    }    
  }  
  
  endRenderingClass(model: ClassModel, filePath: string, config: ClassConfigModel, map: IGlobalMetaMap): void {
    this.writeToFile(model, filePath)
  }
  endRenderingDelegate(model: DelegateModel, filePath: string, config: DelegateConfigModel, map: IGlobalMetaMap): void {
    this.writeToFile(model, filePath)
  }
  endRenderingEnum(model: EnumModel, filePath: string, config: EnumConfigModel, map: IGlobalMetaMap): void {
    this.writeToFile(model, filePath)
  }
  endRenderingInterface(model: InterfaceModel, filePath: string, config: InterfaceConfigModel, map: IGlobalMetaMap): void {
    this.writeToFile(model, filePath)
  }
  endRenderingStruct(model: StructModel, filePath: string, config: StructConfigModel, map: IGlobalMetaMap): void {
    this.writeToFile(model, filePath)
  }

  /**
   * Writes markdown provided to file. This functional determines the folder/file structure.
   * @param model Contains the information required for path/file location.
   * @param content Markdown content to be written.
   */
  writeToFile(model: TypeModel<CommonComment>, filePath: string): void {
    // Build
    if (!existsSync(filePath)) {
      mkdirSync(filePath, { recursive: true })
    }

    // Write to file using the FullName prop because we may need parent class names if this type is nested.
    writeFile(filePath + `/${model.fullName.substring(model.fullName.lastIndexOf('.') + 1)}.md`, this.content, (err) => {
      if (err) {
        console.log(err) // TODO: Change to logger later
        throw err
      }      
    })
  }
}