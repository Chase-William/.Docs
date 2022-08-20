import IAmSlicedTypeModel from "../models/language/interfaces/types/IAmSlicedTypeModel"

export default class TypeLink {
  name: string = null
  filePath: string | null = null
  foundationalType: IAmSlicedTypeModel
  from: IAmSlicedTypeModel
  to: IAmSlicedTypeModel | null = null

  // constructor(name: string, filePath: string | null, comments: CommonComment | null) {
  //   this.name = name
  //   this.filePath = filePath
  //   this.comments = comments
  // }

  constructor(from: IAmSlicedTypeModel, foundationalType: IAmSlicedTypeModel, to: IAmSlicedTypeModel | null, fileEx: string) {
    this.from = from
    if (to) {
      this.to = to
      this.name = to.getName()
      // Prevent linking to types that do not have their own referenceable location
      if (!to.isFacade) // Link to an argument type
        this.filePath = from.getFilePathToOther(to, fileEx)            
    }
    else
    {
      this.name = foundationalType.getName()
      // Link the type to the foundational type
      this.filePath = from.getFilePathToOther(foundationalType, fileEx)
    }
    this.foundationalType = foundationalType
  }
}