import PropertyConfigModel from "../../models/config/members/PropertyConfigModel"
import PropertyModel from "../../models/members/PropertyModel"
import { getOptionalSummary } from "../CommentsRenderer"
import divider, { renderIsStaticTag, renderVirtualAndStaticTags } from "../Util"

export function renderProperty(property: PropertyModel, config: PropertyConfigModel): string {
  return (    
    renderPropertyHeader(property, config) +      
    divider() +
    getOptionalSummary(property.comments) +
    divider() +
    renderGetterAndSetter(property) +
    divider()
  )
}

function renderGetterAndSetter(prop: PropertyModel): string {
  let content = ''

  if (prop.hasGetter) {
    content += (
      `- *get*${
        prop.isGetPublic ? ' `public`' : ''}${
        prop.isGetPrivate ? ' `private`' : ''}${
        prop.isGetInternal ? ' `internal`' : ''}${
        prop.isGetProtected ? ' `protected`' : ''}`
    )
  }

  if (prop.hasSetter) {
    if (prop.hasGetter)
      content += '\n'
    content += (
      `- *set*${
        prop.isSetPublic ? ' `public`' : ''}${
        prop.isSetPrivate ? ' `private`' : ''}${
        prop.isSetInternal ? ' `internal`' : ''}${
        prop.isSetProtected ? ' `protected`' : ''}`
    )
  }
  return content
}

function renderPropertyHeader(prop: PropertyModel, config: PropertyConfigModel): string {
  return (
    `### ${prop.name}\`<${prop.type}>\`` +
    renderIsStaticTag(prop, config) +
    renderVirtualAndStaticTags(prop, config) +
    ((prop.hasSetter && prop.isSetPublic) ? '' : ' `readonly`') +
    ((prop.hasGetter && prop.isGetPublic) ? '' : ' `setonly`')
  )
}