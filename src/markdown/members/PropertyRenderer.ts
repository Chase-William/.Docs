import PropertyConfigModel from "../../models/config/members/PropertyConfigModel"
import PropertyModel from "../../models/members/PropertyModel"
import { getOptionalSummary } from "../CommentsRenderer"
import divider, { renderIsStaticTag, renderVirtualAndStaticTags } from "../Util"

export default class PropertyRenderer {
  content = ''
  didRenderGetter: boolean = null
  didRenderSetter: boolean = null  

  constructor(property: PropertyModel, config: PropertyConfigModel) {
    this.content = this.renderProperty(property, config)
  }

  renderProperty(property: PropertyModel, config: PropertyConfigModel): string {
    return (    
      this.renderPropertyHeader(property, config) +      
      divider() +
      getOptionalSummary(property.comments) +
      divider() +
      this.renderGetterAndSetter(property, config) +
      ((this.didRenderGetter || this.didRenderSetter) ? divider() : '')
    )
  }
  
  renderGetterAndSetter(prop: PropertyModel, config: PropertyConfigModel): string {
    let getterContent = ''
    let setterContent = ''

    getterContent += this.renderGetter(prop, config)    
  
    if (getterContent !== '') { // check to see if the getter was printed    
      this.didRenderGetter = true
    } else {
      this.didRenderGetter = false
    }
    setterContent += this.renderSetter(prop, config)

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
  
  renderSetter(prop: PropertyModel, config: PropertyConfigModel): string {
    if (!prop.hasSetter)
      return ''

    const base = '- *set* '
    if (config.denoteIfSetPublic && prop.isPublic) 
      return base + '`public`'
    if (config.denoteIfSetProtected && prop.isSetProtected) 
      return base + '`protected`'
    if (config.denoteIfSetInternal && prop.isSetInternal) 
      return base + '`internal`'
    if (config.denoteIfSetInternalProtected && prop.isSetInternal && prop.isSetProtected) 
      return base + '`internal protected`'
    if (config.denoteIfSetPrivate && prop.isSetPrivate) 
      return base + '`private`'
    if (config.denoteIfHasSetter)
      return base
    return ''
  }
  
  renderGetter(prop: PropertyModel, config: PropertyConfigModel): string {    
    if (!prop.hasGetter)
      return ''

    const base = '- *get* '
    if (config.denoteIfGetPublic && prop.isGetPublic) 
      return base + '`public`'
    if (config.denoteIfGetProtected && prop.isGetProtected) 
      return base + '`protected`'
    if (config.denoteIfGetInternal && prop.isGetInternal) 
      return base + '`internal`'
    if (config.denoteIfGetInternalProtected && prop.isGetInternal && prop.isGetProtected) 
      return base + '`internal protected`'
    if (config.denoteIfGetPrivate && prop.isGetPrivate) 
      return base + '`private`'
    if (config.denoteIfHasGetter)
      return base
    return ''
  }
  
  renderPropertyHeader(prop: PropertyModel, config: PropertyConfigModel): string {
    return (
      `### ${prop.name}\`<${prop.type}>\`` +
      renderIsStaticTag(prop, config) +
      renderVirtualAndStaticTags(prop, config) +
      this.renderReadonlyTag(prop, config) +
      this.renderSetonlyTag(prop, config)
    )
  }
  
  renderSetonlyTag(prop: PropertyModel, config: PropertyConfigModel): string {
    if (!config.denoteIfSetonly)
      return ''  
    return (prop.hasGetter && prop.isGetPublic) ? '' : ' `setonly`'
  }
  
  renderReadonlyTag(prop: PropertyModel, config: PropertyConfigModel): string {
    if (!config.denoteIfReadonly)
      return ''  
    return (prop.hasSetter && prop.isSetPublic) ? '' : ' `readonly`'
  }
}