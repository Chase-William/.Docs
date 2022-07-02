import MethodModel from "../../models/members/MethodModel"
import { getOptionalSummary } from "../CommentsRenderer"
import divider, { check, optionalDivider } from "../Util"

// export default function methodRenderer(methods: MethodModel[]): string {
//   // Ascending Alphabetical
//   methods.sort((a, b) => a.name.localeCompare(b.name))
//   const publicMethods = new Array<MethodModel>()
//   const privateMethods = new Array<MethodModel>()
//   const protectedMethods = new Array<MethodModel>()
//   const internalMethods = new Array<MethodModel>()
//   const internalAndProtectedMethods = new Array<MethodModel>()

//   for (const method of methods) {
//     if (method.isInternal && method.isProtected) {
//       internalAndProtectedMethods.push(method)
//     } else if (method.isInternal) {
//       internalMethods.push(method)
//     } else if (method.isProtected) {
//       protectedMethods.push(method)
//     } else if (method.isPublic) {
//       publicMethods.push(method)
//     } else { // private
//       privateMethods.push(method)
//     }
//   }

//   return (
//     renderMethods(publicMethods, '## `public`') +
//     optionalDivider(protectedMethods) +
//     renderMethods(protectedMethods, '## `protected`') +    
//     optionalDivider(internalMethods) +
//     renderMethods(internalMethods, '## `internal`') +    
//     optionalDivider(internalAndProtectedMethods) +
//     renderMethods(internalAndProtectedMethods, '## `internal protected`') +
//     optionalDivider(privateMethods) +
//     renderMethods(privateMethods, '## `private`')
//   ) 
// }

export function renderMethod(method: MethodModel): string {
  let content = (
    divider() +
    `### ${method.name}` +
    divider() +
    getOptionalSummary(method.comments) +
    (!(method.parameters) || method.parameters.length == 0 ? '' : '\n')
  )
  method.parameters.forEach(param => {
    content += (
      '\n- *@param* ' +
      `${param.name} \`${param.type}\``
    )
  })
  content += (
    (method.parameters ? divider() : '') +
    '- *@returns* ' +
    method.returnType
  )  
 
  return content
}