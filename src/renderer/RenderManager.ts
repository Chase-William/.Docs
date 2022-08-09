import path = require("path");
import AccessibilityModel from "../models/AccessibilityModel";
import ConfigModel from "../models/config/ConfigModel";
import Configuration from "../models/config/Configuration";
import MemberConfig from "../models/config/MemberConfig";
import MemberConfigModel from "../models/config/members/MemberConfigModel";
import MapperManager, { IGlobalMetaMap } from "../models/global/MapperManager";
import EventModel from "../models/members/EventModel";
import FieldModel from "../models/members/FieldModel";
import MemberModel from "../models/members/MemberModel";
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
 * The RenderManager doesn't perform any rendering, instead it 
 * works closely with a configuration to restrict what gets rendered.
 * 
 * For example, instead of calling a render function for a property with a config and 
 * having the receiver determine if that property should be rendered; lets just do that here.
 * This reduces the workload/complexity and maintenance needed by different rendering implementations.
 * 
 * This is the last place for changes that will impact all renderers. (This is the callsite where renderer
 * implementations have their functions called)
 */
export default class RenderManager {
  config: Configuration;
  path: string
  renderer: Renderer
  map: IGlobalMetaMap

  renderClass(model: ClassModel): void {    
    // Check config to determine what shall be rendered
    if (!this.shouldRender(model, this.config.type.class))
      return
    const filePath = this.getFilePath(model)
    this.renderer.beginRenderingClass(model, this.config.type.class, this.map)
    this.renderMembers(model)
    this.renderer.endRenderingClass(model, filePath, this.config.type.class, this.map)
  }

  renderDelegate(model: DelegateModel): void {
    if (!this.shouldRender(model, this.config.type.delegate))
      return
    const filePath = this.getFilePath(model)
    this.renderer.beginRenderingDelegate(model, this.config.type.delegate, this.map)
    this.renderer.endRenderingDelegate(model, filePath, this.config.type.delegate, this.map)
  }

  renderEnum(model: EnumModel): void {
    if (!this.shouldRender(model, this.config.type.enum))
      return
    const filePath = this.getFilePath(model)
    this.renderer.beginRenderingEnum(model, this.config.type.enum, this.map)
    this.renderer.renderValues(model, model.fields)
    this.renderer.endRenderingEnum(model, filePath, this.config.type.enum, this.map)
  }

  renderInterface(model: InterfaceModel): void {
    if (!this.shouldRender(model, this.config.type.interface))
      return
    const filePath = this.getFilePath(model)
    this.renderer.beginRenderingInterface(model, this.config.type.interface, this.map)
    this.renderMembers(model)
    this.renderer.endRenderingInterface(model, filePath, this.config.type.interface, this.map)
  }

  renderStruct(model: StructModel): void {
    if (!this.shouldRender(model, this.config.type.struct))
      return
    const filePath = this.getFilePath(model)
    this.renderer.beginRenderingStruct(model, this.config.type.struct, this.map)
    this.renderMembers(model)
    this.renderer.endRenderingStruct(model, filePath, this.config.type.struct, this.map)
  }

  renderMembers(model: StandardMembersModel): void {
    // Properties
    if (model.properties && model.properties.length > 0) {
      if (this.hasRenderableModels(model.properties, this.config.member.property)) {    
        this.renderProperties(model.properties)
      }      
    }
    // Methods
    if (model.methods && model.methods.length > 0) {
      if (this.hasRenderableModels(model.methods, this.config.member.method)) {    
        this.renderMethods(model.methods)
      }      
    }
    // Events
    if (model.events && model.events.length > 0) {
      if (this.hasRenderableModels(model.events, this.config.member.event)) {    
        this.renderEvents(model.events)
      }      
    }
    // Fields
    if (model.fields && model.fields.length > 0) {
      if (this.hasRenderableModels(model.fields, this.config.member.field)) {    
        this.renderFields(model.fields)
      }      
    }
  }

  renderProperties(properties: PropertyModel[]): void {
    this.renderOrganizedMembers(
      properties, 
      this.config.member.property, 
      (accessibility: string, models: PropertyModel[]) => this.renderer.renderProperties(accessibility, models, this.config.member.property, this.map))
  }

  renderMethods(methods: MethodModel[]): void {
    this.renderOrganizedMembers(
      methods,
      this.config.member.method, 
      (accessibility: string, models: MethodModel[]) => this.renderer.renderMethods(accessibility, models, this.config.member.method, this.map))
  }

  renderEvents(event: EventModel[]): void {
    this.renderOrganizedMembers(
      event, 
      this.config.member.event, 
      (accessibility: string, models: EventModel[]) => this.renderer.renderEvents(accessibility, models, this.config.member.event, this.map))
  }
  
  renderFields(fields: FieldModel[]): void {
    this.renderOrganizedMembers(
      fields, 
      this.config.member.field, 
      (accessibility: string, models: FieldModel[]) => this.renderer.renderFields(accessibility, models, this.config.member.field, this.map))
  }  

  renderOrganizedMembers<T extends MemberModel<CommonComment>>(models: T[], config: MemberConfigModel, renderFunc: (accessibility: string, models: T[]) => void): void {
    models.sort((a, b) => a.name.localeCompare(b.name))
    const publicModels = new Array<T>()
    const privateModels = new Array<T>()
    const protectedModels = new Array<T>()
    const internalModels = new Array<T>()
    const internalAndProtectedModels = new Array<T>()

    for (const model of models) {
      if (model.isInternal && model.isProtected) {
        internalAndProtectedModels.push(model)
      } else if (model.isInternal) {
        internalModels.push(model)
      } else if (model.isProtected) {
        protectedModels.push(model)
      } else if (model.isPublic) {
        publicModels.push(model)
      } else { // private
        privateModels.push(model)
      }
    }

    /**
     * Do not render if config says not to.
     * Do not render if config says to, but there is nothing to render.
     */

    if (config.showIfPublic && publicModels.length > 0)
      renderFunc('public', publicModels)
    if (config.showIfProtected && protectedModels.length > 0)
      renderFunc('protected', protectedModels)
    if (config.showIfInternal && internalModels.length > 0)
      renderFunc('internal', internalModels)
    if (config.showIfInternalProtected && internalAndProtectedModels.length > 0)
      renderFunc('internal protected', internalAndProtectedModels)
    if (config.showIfPrivate && privateModels.length > 0)
      renderFunc('private', privateModels)
  }


  // renderOrganizedMembers<T extends MemberModel<CommonComment>>(models: T[], config: MemberConfigModel, renderFunc: (accessibility: string, models: MemberModel<CommonComment>[], config: MemberConfigModel) => void): void {
  //   models.sort((a, b) => a.name.localeCompare(b.name))
  //   const publicModels = new Array<T>()
  //   const privateModels = new Array<T>()
  //   const protectedModels = new Array<T>()
  //   const internalModels = new Array<T>()
  //   const internalAndProtectedModels = new Array<T>()

  //   for (const model of models) {
  //     if (model.isInternal && model.isProtected) {
  //       internalAndProtectedModels.push(model)
  //     } else if (model.isInternal) {
  //       internalModels.push(model)
  //     } else if (model.isProtected) {
  //       protectedModels.push(model)
  //     } else if (model.isPublic) {
  //       publicModels.push(model)
  //     } else { // private
  //       privateModels.push(model)
  //     }
  //   }

  //   if (config.showIfPublic)
  //     renderFunc('public', publicModels, config)
  //   if (config.showIfProtected)
  //     renderFunc('protected', protectedModels, config)
  //   if (config.showIfInternal)
  //     renderFunc('internal', internalModels, config)
  //   if (config.showIfInternalProtected)
  //     renderFunc('internal protected', internalAndProtectedModels, config)
  //   if (config.showIfPrivate)
  //     renderFunc('private', privateModels, config)
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