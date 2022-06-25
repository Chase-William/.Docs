import PropertyModel from "../../models/members/PropertyModel"
import { getOptionalSummary } from "../CommentsRenderer"
import divider, { check, optionalDivider } from "../Util"

export default function propertyRenderer(properties: PropertyModel[]): string {
  // Ascending Alphabetical
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

  return (
    renderProperties(publicProps, '### `public`') +
    optionalDivider(protectedProps) +
    renderProperties(protectedProps, '### `protected`') +    
    optionalDivider(internalProps) +
    renderProperties(internalProps, '### `internal`') +   
    optionalDivider(internalAndProtectedProps) +
    renderProperties(internalAndProtectedProps, '### `internal protected`') +
    optionalDivider(privateProps) +
    renderProperties(privateProps, '### `private`')
  )
}

function renderProperties(properties: PropertyModel[], title: string): string {
  if (check(properties)) return ''

  let content = title + ' Properties'

  for (const property of properties) {
    content += (
      divider() +
      renderPropertyTitle(property) +
      divider() +
      getOptionalSummary(property.comments) +
      divider() +
      renderGetterAndSetter(property)
    )
  }
  return content
}

function renderInternalAndProtectedProperties(properties: PropertyModel[]): string {
  if (check(properties)) return ''

  let content = '## `internal protected` Properties'

  for (const prop of properties) {
    content += (
      divider() +
      renderPropertyTitle(prop) +
      divider() +
      getOptionalSummary(prop.comments) + 
      divider() +
      renderGetterAndSetter(prop)
    )
  }

  return content
}

function renderProtectedProperties(properties: PropertyModel[]): string {
  if (check(properties)) return ''

  let content = '## `protected` Properties'

  for (const prop of properties) {
    content += (
      divider() +
      renderPropertyTitle(prop) +
      divider() +
      getOptionalSummary(prop.comments) +
      divider() +
      renderGetterAndSetter(prop)
    )
  }

  return content
}

function renderInternalProperties(properties: PropertyModel[]): string {
  if (check(properties)) return ''

  let content = '## `internal` Properties'

  for (const prop of properties) {
    content += (
      divider() +
      renderPropertyTitle(prop) +
      divider() +
      getOptionalSummary(prop.comments) + 
      divider() +
      renderGetterAndSetter(prop)
    )
  }

  return content
}

function renderPrivateProperties(properties: PropertyModel[]): string {
  if (check(properties)) return ''

  let content = '## `private` Properties'

  for (const prop of properties) {
    content += (
      divider() +
      `### ${prop.name} ${(prop.hasGetter ? '' : "`readonly`")}` +
      divider() +
      getOptionalSummary(prop.comments) +
      divider() +
      renderGetterAndSetter(prop)
    )
  }

  return content
}

function renderPublicProperties(properties: PropertyModel[]): string {
  if (check(properties)) return ''

  let content = '## `public` Properties'

  for (const prop of properties) {
    content += (
      divider() +
      renderPropertyTitle(prop) +
      divider() +
      getOptionalSummary(prop.comments) +
      divider() +
      renderGetterAndSetter(prop)
    )
  }
  return content
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

function renderPropertyTitle(prop: PropertyModel): string {
  return `### ${prop.name}${
    prop.isStatic ? '' : ' `static`'}${
    prop.isVirtual ? ' `virtual`' : ''}${
    prop.isAbstract ? ' `abstract`' : ''}${
    prop.hasSetter && prop.isSetPublic ? '' : ' `readonly`'}${
    prop.hasGetter && prop.isGetPublic ? '' : ' `setonly`'
    }`
}

// function renderAsTables(properties: PropertyModel[]): string {
//   let content = (
//     `\n\n## Properties\n| Name | Type | Summary |\n| ---- | ---- | ------- |\n`
//   )
  
//   properties.sort((a, b) => a.name.localeCompare(b.name))

//   for (const prop of properties) {
//     content += (
//       `|${prop.name}|\`${prop.type}\`|${getOptionalSummary(prop.comments)}|\n`
//     )
//   }  

//   return content
// }
