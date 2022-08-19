import Configuration from "../models/config/Configuration";
import ClassConfigModel from "../models/config/types/ClassConfigModel";
import DelegateConfigModel from "../models/config/types/DelegateConfigModel";
import EnumConfigModel from "../models/config/types/EnumConfigModel";
import InterfaceConfigModel from "../models/config/types/InterfaceConfigModel";
import StructConfigModel from "../models/config/types/StructConfigModel";
import IAmProjectManager from "../ProjectManager";

export default class RenderTypeArgs<TConfig extends ClassConfigModel | DelegateConfigModel | EnumConfigModel | InterfaceConfigModel | StructConfigModel> {
  config: TConfig
  /**
   * A path to the file that includes it's name and extension.
   */
  filePath: string
  /**
   * The directory the file will reside in.
   */
  directory: string
  /**
   * The file's name without extension.
   */
  fileName: string
  /**
   * The file's extension.
   */
  fileExtension: string
  projManager: IAmProjectManager
}