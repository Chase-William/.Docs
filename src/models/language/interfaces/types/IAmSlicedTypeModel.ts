import TypeLink from "../../../../rendering/TypeLink"
import AssemblyModel from "../../../AssemblyModel"
import CommonComment from "../../../written/CommonComment"
import IAmAccessibilityModel from "../IAmAccessibilityModel"
import IAmModel from "../IAmModel"
import IAmTypeModel from "../IAmTypeModel"

export default interface IAmSlicedTypeModel
  extends IAmAccessibilityModel,
          IAmModel {
  baseType: IAmTypeModel
  namespace: string
  fullName: string
  comments: CommonComment
  assembly: AssemblyModel
  genericTypeArguments: IAmTypeModel[]
  genericTypeParameters: IAmTypeModel[]
  isConstructedGenericType: boolean
  isGenericType: boolean
  isGenericParameter: boolean
  metadataToken: number
  id: string

  getNameWithGenerics(fileEx: string): { name: TypeLink, generics: TypeLink[] }
  getTypeLinkToOther(to: IAmSlicedTypeModel, fileEx: string): TypeLink
  getName(): string
  getFilePathToOther: (to: IAmSlicedTypeModel, fileEx: string) => string
  getFilePath(): string
}