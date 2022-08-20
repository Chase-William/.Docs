import TypeLink from "../../../../renderer/TypeLink"
import AssemblyModel from "../../../AssemblyModel"
import CommonComment from "../../../written/CommonComment"
import IAmAccessibilityModel from "../IAmAccessibilityModel"
import IAmModel from "../IAmModel"
import IAmTypeModel from "../IAmFullTypeModel"

export default interface IAmSlicedTypeModel
  extends IAmAccessibilityModel,
          IAmModel {
  baseType: IAmTypeModel
  namespace: string
  fullName: string
  comments: CommonComment | null
  assembly: AssemblyModel
  genericTypeArguments: IAmTypeModel[]
  genericTypeParameters: IAmTypeModel[]
  isConstructedGenericType: boolean
  isGenericType: boolean
  isGenericParameter: boolean
  metadataToken: number
  id: string
  isFacade: boolean

  getNameWithGenerics(fileEx: string): { root: TypeLink, generics: TypeLink[] }
  getTypeLinkToOther(to: IAmSlicedTypeModel, fileEx: string): TypeLink
  getName(): string
  getFilePathToOther: (to: IAmSlicedTypeModel, fileEx: string) => string
  getFilePathWithEx(fileEx: string): string
  getFilePath(): string
  getDirectory(): string
}