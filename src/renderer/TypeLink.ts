import IAmSlicedTypeModel from "../models/language/interfaces/types/IAmSlicedTypeModel"

export default class TypeLink {
  name: string = null
  filePath: string | null = null
  from: IAmSlicedTypeModel
  to: IAmSlicedTypeModel

  // constructor(name: string, filePath: string | null, comments: CommonComment | null) {
  //   this.name = name
  //   this.filePath = filePath
  //   this.comments = comments
  // }

  constructor(from: IAmSlicedTypeModel, to: IAmSlicedTypeModel, fileEx: string) {
    this.from = from
    this.to = to
    this.name = to.getName()
    // Prevent linking to types that do not have their own referenceable location
    if (to.isRenderable())
      this.filePath = from.getFilePathToOther(to, fileEx)
    // Create a link to an arrays element type if possible
    else if (to.isRenderableArrayType())
      this.filePath = from.getFilePathToOther(to.elementType, fileEx)              
  }
}