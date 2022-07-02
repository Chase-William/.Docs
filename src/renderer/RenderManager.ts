import path = require("path");
import AccessibilityModel from "../models/AccessibilityModel";
import ConfigModel from "../models/config/ConfigModel";
import Configuration from "../models/config/Configuration";
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
    const filePath = this.getFilePath(model)
    this.renderer.beginRenderingClass(model, this.config.type.class)
    this.renderMembers(model)
    this.renderer.endRenderingClass(model, filePath, this.config.type.class)
  }

  renderDelegate(model: DelegateModel): void {
    if (!this.shouldRender(model, this.config.type.delegate))
      return
    const filePath = this.getFilePath(model)
    this.renderer.beginRenderingDelegate(model, this.config.type.delegate)
    this.renderer.endRenderingDelegate(model, filePath, this.config.type.delegate)
  }

  renderEnum(model: EnumModel): void {
    if (!this.shouldRender(model, this.config.type.enum))
      return
    const filePath = this.getFilePath(model)
    this.renderer.beginRenderingEnum(model, this.config.type.enum)
    this.renderer.renderValues(model, model.fields)
    this.renderer.endRenderingEnum(model, filePath, this.config.type.enum)
  }

  renderInterface(model: InterfaceModel): void {
    if (!this.shouldRender(model, this.config.type.interface))
      return
    const filePath = this.getFilePath(model)
    this.renderer.beginRenderingInterface(model, this.config.type.interface)
    this.renderMembers(model)
    this.renderer.endRenderingInterface(model, filePath, this.config.type.interface)
  }

  renderStruct(model: StructModel): void {
    if (!this.shouldRender(model, this.config.type.struct))
      return
    const filePath = this.getFilePath(model)
    this.renderer.beginRenderingStruct(model, this.config.type.struct)
    this.renderMembers(model)
    this.renderer.endRenderingStruct(model, filePath, this.config.type.struct)
  }

  renderMembers(model: StandardMembersModel): void {
    if (model.properties && model.properties.length > 0) {
      if (this.hasRenderableModels(model.properties, this.config.member.property)) {    
        this.renderProperties(model.properties)
      }      
    }
  }

  renderProperties(properties: PropertyModel[]): void {
    properties.sort((a, b) => a.name.localeCompare(b.name))
    const publicProps = new Array<PropertyModel>()
    const privateProps = new Array<PropertyModel>()
    const protectedProps = new Array<PropertyModel>()
    const internalProps = new Array<PropertyModel>()
    const internalAndProtectedProps = new Array<PropertyModel>()

    for (const prop of properties) {
      if (prop.isInternal && prop.isProtected) {
        internalAndProtectedProps.push(prop)
      } else if (prop.isInternal) {
        internalProps.push(prop)
      } else if (prop.isProtected) {
        protectedProps.push(prop)
      } else if (prop.isPublic) {
        publicProps.push(prop)
      } else { // private
        privateProps.push(prop)
      }
    }

    if (this.config.member.property.showIfPublic)
      this.renderer.renderProperties('public', publicProps, this.config.member.property)
    if (this.config.member.property.showIfProtected)
      this.renderer.renderProperties('protected', protectedProps, this.config.member.property)
    if (this.config.member.property.showIfInternal)
      this.renderer.renderProperties('internal', internalProps, this.config.member.property)
    if (this.config.member.property.showIfInternalProtected)
      this.renderer.renderProperties('internal protected', internalAndProtectedProps, this.config.member.property)
    if (this.config.member.property.showIfPrivate)
      this.renderer.renderProperties('private', privateProps, this.config.member.property)
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

  getFilePath(model: TypeModel<CommonComment>): string {
    return path.join(this.path, this.getDirectory(model.fullName))
  }

  /**
   * Gets the directory of a model via it's namespace location.
   * @param namespace Location of the type.
   * @returns Directory that resembles the namespace location, but with the top level namespace and type itself omitted.
   */
  getDirectory(namespace: string): string {
    const names = namespace.split('.')
    return names.slice(1, names.length - 1).join('/')
  }
}