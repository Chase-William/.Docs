import AccessibilityModel from "../models/AccessibilityModel";
import ConfigModel from "../models/config/ConfigModel";
import Configuration from "../models/config/Configuration";
import ClassModel from "../models/types/ClassModel";
import DelegateModel from "../models/types/DelegateModel";
import EnumModel from "../models/types/EnumModel";
import InterfaceModel from "../models/types/InterfaceModel";
import StandardMembersModel from "../models/types/StandardMembersModel";
import StructModel from "../models/types/StructModel";
import Renderer from "./Renderer";

/**
 * The RenderManager doesn't perform any rendering, instead it 
 * works closely with a configuration to restrict what gets rendered.
 */
export default class RenderManager {
  config: Configuration;
  path: string
  renderer: Renderer

  renderClass(model: ClassModel): void {    
    // Check config to determine what shall be rendered
    if (!this.shouldRender(model, this.config.type.class))
      return
    const filePath = getDirectory(model.namespace)
    this.renderer.beginRenderingClass(model, filePath)
    this.renderMembers(model)
    this.renderer.endRenderingClass(model, filePath)
  }

  renderDelegate(model: DelegateModel): void {
    console.log('render delegate')
  }

  renderEnum(model: EnumModel): void {
    console.log('render enum')
    //this.renderValues(model)
  }

  renderInterface(model: InterfaceModel): void {
    this.renderMembers(model)
  }

  renderStruct(model: StructModel): void {
    this.renderMembers(model)
  }

  renderMembers(model: StandardMembersModel): void {
    if (model.properties && model.properties.length > 0) {
      if (this.hasRenderableModels(model.properties, this.config.member.property)) {
        this.renderer.beginRenderingProperties();
        for (const prop of model.properties) {
          this.renderer.renderProperty(prop)
        }
        this.renderer.endRenderingProperties();
      }      
    }
    // if (model.methods && model.methods.length > 0)
    // {
    //   this.renderer.beginRenderingProperties();
    //   for (const prop of model.properties) {
    //     this.renderer.renderProperty(prop)
    //   }
    //   this.renderer.endRenderingProperties();
    // }
    // if (model.events && model.events.length > 0)
    // {
    //   this.renderer.beginRenderingProperties();
    //   for (const prop of model.properties) {
    //     this.renderer.renderProperty(prop)
    //   }
    //   this.renderer.endRenderingProperties();
    // }
    // if (model.fields && model.fields.length > 0)
    // {
    //   this.renderer.beginRenderingProperties();
    //   for (const prop of model.properties) {
    //     this.renderer.renderProperty(prop)
    //   }
    //   this.renderer.endRenderingProperties();
    // }
  }

  // renderValues(model: EnumModel): void {
  //   if (model.fields && model.fields.length > 0)
  //     this.renderer.renderValues(model.fields)
  // }

  /**
   * Determines if the given model should be rendered based on the config.
   * @param model to be or not to be rendered
   * @param config to be compared to model
   * @returns true for to be rendered, false to skip rendering
   */
  shouldRender(model: AccessibilityModel, config: ConfigModel): boolean {
    // Must process "internal protected" before other states because of it's composition of other states 
    // Otherwise it generates false truths in below conditionals
    if (model.isInternal && model.isProtected)
    {
      if (config.showIfInternalProtected)
        return true
      return false
    }

    // Only render when this entity's accessibility mod matches the config's value
    if (model.isPublic && config.showIfPublic ||      
        model.isProtected && config.showIfProtected ||
        model.isInternal && config.showIfInternal ||      
        model.isPrivate && config.showIfPrivate) 
      return true
      
    return false
  }

  hasRenderableModels(models: AccessibilityModel[], config: ConfigModel): boolean {
    for (const model of models) {
      // Must process "internal protected" before other states because of it's composition of other states 
      // Otherwise it generates false truths in below conditionals
      if (model.isInternal && model.isProtected)
      {
        if (config.showIfInternalProtected)
          return true
        continue
      }

      // Only render when this entity's accessibility mod matches the config's value
      if (model.isPublic && config.showIfPublic ||      
          model.isProtected && config.showIfProtected ||
          model.isInternal && config.showIfInternal ||      
          model.isPrivate && config.showIfPrivate) 
        return true              
    }
    return false
  }
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
