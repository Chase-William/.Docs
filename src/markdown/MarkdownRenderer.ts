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
import IAmEventModel from "../models/language/interfaces/members/IAmEventModel";
import CommonComment from "../models/written/CommonComment";
import Renderer from "../renderer/Renderer";
import RenderMembersArgs from "../renderer/RenderMembersArgs";
import RenderTypeArgs, { TYPE_CONFIGURATIONS_DEF } from "../renderer/RenderTypeArgs";
import { renderEvent } from "./members/EventRenderer";
import { renderField } from "./members/FieldRenderer";
import { renderMethod } from "./members/MethodRenderer";
import PropertyRenderer from "./members/PropertyRenderer";
import renderDelegate from "./types/DelegateRenderer";
import { renderValue } from "./types/EnumRenderer";
import divider, { renderTypeHeader } from "./Util";
import IAmClassModel from "../models/language/interfaces/types/IAmClassModel";
import IAmDelegateModel from "../models/language/interfaces/types/IAmDelegateModel";
import IAmEnumModel from "../models/language/interfaces/types/IAmEnumModel";
import IAmInterfaceModel from "../models/language/interfaces/types/IAmInterfaceModel";
import IAmStructModel from "../models/language/interfaces/types/IAmStructModel";
import IAmSlicedTypeModel from "../models/language/interfaces/types/IAmSlicedTypeModel";
import IAmPropertyModel from "../models/language/interfaces/members/IAmPropertyModel";
import IAmMethodModel from "../models/language/interfaces/members/IAmMethodModel";
import IAmFieldModel from "../models/language/interfaces/members/IAmFieldModel";
import path = require("path");

export default class MarkdownRenderer implements Renderer {  
  content = '';
   
  beginRenderingClass(model: IAmClassModel, args: RenderTypeArgs<ClassConfigModel>): void {
    this.content = ''
    this.content += (
      renderTypeHeader(model, args)
    )
  }
  beginRenderingDelegate(model: IAmDelegateModel, args: RenderTypeArgs<DelegateConfigModel>): void {
    this.content = ''
    this.content += (
      renderTypeHeader(model, args) +
      '\n' +
      renderDelegate(model, args)
    )
  }
  beginRenderingEnum(model: IAmEnumModel, args: RenderTypeArgs<EnumConfigModel>): void {
    this.content = ''
    this.content += (
      renderTypeHeader(model, args)
    )
  }
  beginRenderingInterface(model: IAmInterfaceModel, args: RenderTypeArgs<InterfaceConfigModel>): void {
    this.content = ''
    this.content += (
      renderTypeHeader(model, args)
    )
  }
  beginRenderingStruct(model: IAmStructModel, args: RenderTypeArgs<StructConfigModel>): void {
    this.content = ''
    this.content += (
      renderTypeHeader(model, args)
    )
  }
  renderProperties(accessibility: string, args: RenderMembersArgs<IAmSlicedTypeModel, IAmPropertyModel, PropertyConfigModel>): void {    
    this.content +=  `## \`${accessibility}\` Properties` + divider()
    for (const prop of args.members) {
      this.content += new PropertyRenderer(prop, args).content
    }
  }
  renderMethods(accessibility: string, args: RenderMembersArgs<IAmSlicedTypeModel, IAmMethodModel, MethodConfigModel>): void {
    this.content += divider() + `## \`${accessibility}\` Methods`
    for (const method of args.members) {
      this.content += renderMethod(method, args)
    }
  }
  renderEvents(accessibility: string, args: RenderMembersArgs<IAmSlicedTypeModel, IAmEventModel, EventConfigModel>): void {
    this.content += divider() + `## \`${accessibility}\` Events`
    for (const event of args.members) {
      this.content += renderEvent(event, args)
    }
  }
  renderFields(accessibility: string, args: RenderMembersArgs<IAmSlicedTypeModel, IAmFieldModel, FieldConfigModel>): void {
    this.content += divider() + `## \`${accessibility}\` Fields`    
    for (const field of args.members) {
      this.content += renderField(field, args)
    }
  }
  renderValues(args: RenderMembersArgs<IAmEnumModel, IAmFieldModel, FieldConfigModel>): void {
    this.content += (
      `## Values<\`${args.parent.fields[0].type.getName()}\`>` +
      divider()
    )
    for (const value of args.members) {
      this.content += renderValue(value)
    }    
  }  
  
  endRenderingClass(model: IAmClassModel, args: RenderTypeArgs<ClassConfigModel>): void {
    this.writeToFile(model, args)
  }
  endRenderingDelegate(model: IAmDelegateModel, args: RenderTypeArgs<DelegateConfigModel>): void {
    this.writeToFile(model, args)
  }
  endRenderingEnum(model: IAmEnumModel, args: RenderTypeArgs<EnumConfigModel>): void {
    this.writeToFile(model, args)
  }
  endRenderingInterface(model: IAmInterfaceModel, args: RenderTypeArgs<InterfaceConfigModel>): void {
    this.writeToFile(model, args)
  }
  endRenderingStruct(model: IAmStructModel,args: RenderTypeArgs<StructConfigModel>): void {
    this.writeToFile(model, args)
  }

  /**
   * Writes markdown provided to file. This functional determines the folder/file structure.
   * @param model Contains the information required for path/file location.
   * @param content Markdown content to be written.
   */
  writeToFile(model: IAmSlicedTypeModel, args: RenderTypeArgs<TYPE_CONFIGURATIONS_DEF>): void {
    const dir = path.join(args.outputPath, model.getDirectory())
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true })
    }
    // Write to file using the FullName prop because we may need parent class names if this type is nested.
    writeFile(path.join(args.outputPath, model.getFilePathWithEx('.md')), this.content, (err) => {
      if (err) {
        console.log(err) // TODO: Change to logger later
        throw err
      }      
    })
  }
}