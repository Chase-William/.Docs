import IAmSlicedTypeModel from "../models/language/interfaces/types/IAmSlicedTypeModel"
import CommonComment from "../models/written/CommonComment"

export default class TypeLink {
  name: string = null
  filePath: string | null = null
  from: IAmSlicedTypeModel
  to: IAmSlicedTypeModel | null = null

  // constructor(name: string, filePath: string | null, comments: CommonComment | null) {
  //   this.name = name
  //   this.filePath = filePath
  //   this.comments = comments
  // }

  constructor(from: IAmSlicedTypeModel, to: IAmSlicedTypeModel | null, fileEx: string) {
    if (to) {
      this.name = to.getName()
      this.filePath = from.getFilePathToOther(to, fileEx)      
      this.to = to
    }
    else
      this.name = from.getName()
    this.from = from
  }
}