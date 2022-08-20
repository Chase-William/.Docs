import CommonComment from "../models/written/CommonComment"

export default class TypeLink {
  name: string
  filePath: string | null
  comments: CommonComment | null

  constructor(name: string, filePath: string | null, comments: CommonComment | null) {
    this.name = name
    this.filePath = filePath
    this.comments = comments
  }
}