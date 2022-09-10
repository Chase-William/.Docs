import PropertyConfigModel from "../../models/config/members/PropertyConfigModel"
import IAmPropertyModel from "../../models/language/interfaces/members/IAmPropertyModel"
import IAmSlicedTypeModel from "../../models/language/interfaces/types/IAmSlicedTypeModel"
import RenderMembersArgs from "../../renderer/RenderMembersArgs"
import { getOptionalSummary } from "../CommentsRenderer"
import divider, { renderIsStaticTag, renderLinkableTypeName, renderVirtualAndStaticTags } from "../Util"

export default class PropertyRenderer {
  content = ''
  didRenderGetter: boolean = null
  didRenderSetter: boolean = null  

  constructor(property: IAmPropertyModel, args: RenderMembersArgs<IAmSlicedTypeModel, IAmPropertyModel, PropertyConfigModel>) {
    this.content = this.renderProperty(property, args)
  }

  renderProperty(property: IAmPropertyModel, args: RenderMembersArgs<IAmSlicedTypeModel, IAmPropertyModel, PropertyConfigModel>): string {
    return (
      this.renderPropertyHeader(property, args) +
      divider() +
      getOptionalSummary(property.comments) +
      divider() +
      this.renderGetterAndSetter(property, args) +
      ((this.didRenderGetter || this.didRenderSetter) ? divider() : '')
    )
  }
  
  renderGetterAndSetter(prop: IAmPropertyModel, args: RenderMembersArgs<IAmSlicedTypeModel, IAmPropertyModel, PropertyConfigModel>): string {
    let getterContent = ''
    let setterContent = ''

    getterContent += this.renderGetter(prop, args.config)    
  
    if (getterContent !== '') { // check to see if the getter was printed    
      this.didRenderGetter = true
    } else {
      this.didRenderGetter = false
    }
    setterContent += this.renderSetter(prop, args.config)

    if (setterContent !== '') {  
      this.didRenderSetter = true
    } else {
      this.didRenderSetter = false
    }
    
    if (this.didRenderGetter && this.didRenderSetter) {
      return getterContent + '\n' + setterContent
    }

    return getterContent + setterContent
  }
  
  renderSetter(prop: IAmPropertyModel, config: PropertyConfigModel): string {
    if (!prop.hasSetter)
      return ''

    const base = '- *set* '
    if (config.denoteIfSetPublic && prop.isPublic) 
      return base + '*public*'
    if (config.denoteIfSetProtected && prop.isSetProtected) 
      return base + '*protected*'
    if (config.denoteIfSetInternal && prop.isSetInternal) 
      return base + '*internal*'
    if (config.denoteIfSetInternalProtected && prop.isSetInternal && prop.isSetProtected) 
      return base + '*internal protected*'
    if (config.denoteIfSetPrivate && prop.isSetPrivate) 
      return base + '*private*'
    if (config.denoteIfHasSetter)
      return base
    return ''
  }
  
  renderGetter(prop: IAmPropertyModel, config: PropertyConfigModel): string {    
    if (!prop.hasGetter)
      return ''

    const base = '- *get* '
    if (config.denoteIfGetPublic && prop.isGetPublic) 
      return base + '*public*'
    if (config.denoteIfGetProtected && prop.isGetProtected) 
      return base + '*protected*'
    if (config.denoteIfGetInternal && prop.isGetInternal) 
      return base + '*internal*'
    if (config.denoteIfGetInternalProtected && prop.isGetInternal && prop.isGetProtected) 
      return base + '*internal protected*'
    if (config.denoteIfGetPrivate && prop.isGetPrivate) 
      return base + '*private*`'
    if (config.denoteIfHasGetter)
      return base
    return ''
  }
  
  renderPropertyHeader(prop: IAmPropertyModel, args: RenderMembersArgs<IAmSlicedTypeModel, IAmPropertyModel, PropertyConfigModel>): string {   
    return (
      `### ${prop.name} ${renderLinkableTypeName(args.parent, prop.type)}` +
      renderIsStaticTag(prop, args.config) +
      renderVirtualAndStaticTags(prop, args.config) +
      this.renderReadonlyTag(prop, args.config) +
      this.renderSetonlyTag(prop, args.config)
    )
  }
  
  renderSetonlyTag(prop: IAmPropertyModel, config: PropertyConfigModel): string {
    if (!config.denoteIfSetonly)
      return ''  
    return (prop.hasGetter && prop.isGetPublic) ? '' : ' *setonly*'
  }
  
  renderReadonlyTag(prop: IAmPropertyModel, config: PropertyConfigModel): string {
    if (!config.denoteIfReadonly)
      return ''  
    return (prop.hasSetter && prop.isSetPublic) ? '' : ' *readonly*'
  }
}