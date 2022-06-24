import MethodModel from "../../models/members/MethodModel"
import { getOptionalSummary } from "../CommentsRenderer"
import divider, { check, optionalDivider } from "../Util"

export default function methodRenderer(methods: MethodModel[]): string {
  // Ascending Alphabetical
  methods.sort((a, b) => a.name.localeCompare(b.name))
  const publicMethods = new Array<MethodModel>()
  const privateMethods = new Array<MethodModel>()
  const protectedMethods = new Array<MethodModel>()
  const internalMethods = new Array<MethodModel>()
  const internalAndProtectedMethods = new Array<MethodModel>()

  for (const method of methods) {
    if (method.isInternal && method.isProtected) {
      internalAndProtectedMethods.push(method)
    } else if (method.isInternal) {
      internalMethods.push(method)
    } else if (method.isProtected) {
      protectedMethods.push(method)
    } else if (method.isPublic) {
      publicMethods.push(method)
    } else { // private
      privateMethods.push(method)
    }
  }

  return (
    renderMethods(publicMethods, '## `public`') +
    optionalDivider(protectedMethods) +
    renderMethods(protectedMethods, '## `protected`') +    
    optionalDivider(internalMethods) +
    renderMethods(internalMethods, '## `internal`') +
    optionalDivider(privateMethods) +
    renderMethods(privateMethods, '## `protected`') +
    optionalDivider(internalAndProtectedMethods) +
    renderMethods(internalAndProtectedMethods, '## `internal protected`')
  ) 
}

function renderMethods(methods: MethodModel[], title: string): string {
  if (check(methods)) return ''  

  let content = title + ' Methods'
  for (const method of methods) {
    content += (
      divider() +
      `### ${method.name}` +
      divider() +
      getOptionalSummary(method.comments)
    )
    method.parameters.forEach(param => {
      content += `\n*@param* \`${param}\`\n`
    })    
  }  
  return content
}