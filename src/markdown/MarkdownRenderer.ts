// import { writeFile, existsSync, mkdirSync, rmdirSync, rmSync } from "fs";
// import path = require("path");
// import Configuration from "../models/config/Configuration";
// import ClassConfigModel from "../models/config/types/ClassConfigModel";
// import ClassModel from "../models/types/ClassModel";
// import DelegateModel from "../models/types/DelegateModel";
// import EnumModel from "../models/types/EnumModel";
// import InterfaceModel from "../models/types/InterfaceModel";
// import StructModel from "../models/types/StructModel";
// import TypeModel from "../models/types/TypeModel";
// import CommonComment from "../models/written/CommonComment";
// import { getOptionalSummary } from "./CommentsRenderer";
// import Renderer from "./Renderer";
// import classRenderer from "./types/ClassRenderer";
// import delegateRenderer from "./types/DelegateRenderer";
// import enumRenderer from "./types/EnumRenderer";
// import interfaceRenderer from "./types/InterfaceRenderer";
// import structRenderer from "./types/StructRenderer";
// import divider from "./Util";

import Configuration from "../models/config/Configuration";
import EventModel from "../models/members/EventModel";
import FieldModel from "../models/members/FieldModel";
import MethodModel from "../models/members/MethodModel";
import PropertyModel from "../models/members/PropertyModel";
import ClassModel from "../models/types/ClassModel";
import DelegateModel from "../models/types/DelegateModel";
import EnumModel from "../models/types/EnumModel";
import InterfaceModel from "../models/types/InterfaceModel";
import StructModel from "../models/types/StructModel";
import Renderer from "../renderer/Renderer";

export default class MarkdownRenderer implements Renderer {
  path: string;
  config: Configuration;
  beginRenderingClass(model: ClassModel, filePath: string): void {
    //throw new Error("Method not implemented.");
  }
  beginRenderingDelegate(model: DelegateModel, filePath: string): void {
    //throw new Error("Method not implemented.");
  }
  beginRenderingEnum(model: EnumModel, filePath: string): void {
    //throw new Error("Method not implemented.");
  }
  beginRenderingInterface(model: InterfaceModel, filePath: string): void {
    //throw new Error("Method not implemented.");
  }
  beginRenderingStruct(model: StructModel, filePath: string): void {
    //throw new Error("Method not implemented.");
  }
  beginRenderingProperties(): void {
    //throw new Error("Method not implemented.");
  }
  renderProperty(property: PropertyModel): void {
    //throw new Error("Method not implemented.");
  }
  endRenderingProperties(): void {
    //throw new Error("Method not implemented.");
  }
  beginRenderingMethods(): void {
    //throw new Error("Method not implemented.");
  }
  renderMethod(method: MethodModel): void {
    //throw new Error("Method not implemented.");
  }
  endRenderingMethods(): void {
    //throw new Error("Method not implemented.");
  }
  beginRenderingEvents(): void {
    //throw new Error("Method not implemented.");
  }
  renderEvent(event: EventModel): void {
    //throw new Error("Method not implemented.");
  }
  endRenderingEvents(): void {
    //throw new Error("Method not implemented.");
  }
  beginRenderingFields(): void {
    //throw new Error("Method not implemented.");
  }
  renderField(field: FieldModel): void {
    //throw new Error("Method not implemented.");
  }
  endRenderingFields(): void {
    //throw new Error("Method not implemented.");
  }
  endRenderingClass(model: ClassModel, filePath: string): void {
    //throw new Error("Method not implemented.");
  }
  endRenderingDelegate(model: DelegateModel, filePath: string): void {
    //throw new Error("Method not implemented.");
  }
  endRenderingEnum(model: EnumModel, filePath: string): void {
    //throw new Error("Method not implemented.");
  }
  endRenderingInterface(model: InterfaceModel, filePath: string): void {
    //throw new Error("Method not implemented.");
  }
  endRenderingStruct(model: StructModel, filePath: string): void {
    //throw new Error("Method not implemented.");
  }

}

// /**
//  * Implementation for rendering metadata/documentation to markdown. 
//  */
// export default class MarkdownRenderer implements Renderer {
//   config: Configuration;
//   path: string

//   renderClass(model: ClassModel): void {
//     let content = ''
//     // Check config to determine what shall be rendered
//     if (!shouldRender(model, this.config.type.class))
//       return
//     content += classRenderer(model)
//     writeMarkdownToFile(this.path, model, content)
//   }

//   // renderDelegate(model: DelegateModel): void {
//   //   let content = ''
//   //   content = renderTypeHeader(model)
//   //   content += delegateRenderer(model)
//   //   writeMarkdownToFile(this.path, model, content)
//   // }

//   // renderEnum(model: EnumModel): void {
//   //   let content = ''
//   //   // Header
//   //   content = renderTypeHeader(model)
//   //   content += enumRenderer(model) 
//   //   writeMarkdownToFile(this.path, model, content)
//   // }

//   // renderInterface(model: InterfaceModel): void {
//   //   let content = ''
//   //   // Header
//   //   content = renderTypeHeader(model)
//   //   content += interfaceRenderer(model) 
//   //   writeMarkdownToFile(this.path, model, content)
//   // }

//   // renderStruct(model: StructModel): void {
//   //   let content = ''
//   //   // Header
//   //   content = renderTypeHeader(model)
//   //   content += structRenderer(model) 
//   //   writeMarkdownToFile(this.path, model, content)
//   // }
// }

// export function renderTypeHeader(model: TypeModel<CommonComment>): string {
//   return (
//     `# ${model.name} \`${model.type}\`` +
//     divider() +
//     getOptionalSummary(model.comments) +
//     divider()
//   )
// }

// /**
//  * Writes markdown provided to file. This functional determines the folder/file structure.
//  * @param model Contains the information required for path/file location.
//  * @param content Markdown content to be written.
//  */
// function writeMarkdownToFile(basePath: string, model: TypeModel<CommonComment>, content: string): void {
//   basePath = path.join(basePath, getDirectory(model.fullName))
  
//   // Build
//   if (!existsSync(basePath)) {
//     mkdirSync(basePath, { recursive: true })
//   }

//   // Write to file using the FullName prop because we may need parent class names if this type is nested.
//   writeFile(basePath + `/${model.fullName.substring(model.fullName.lastIndexOf('.') + 1)}.md`, content, (err) => {
//     if (err) {
//       console.log(err) // TODO: Change to logger later
//       throw err
//     }      
//   })
// }