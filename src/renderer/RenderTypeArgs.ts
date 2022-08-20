import ClassConfigModel from "../models/config/types/ClassConfigModel";
import DelegateConfigModel from "../models/config/types/DelegateConfigModel";
import EnumConfigModel from "../models/config/types/EnumConfigModel";
import InterfaceConfigModel from "../models/config/types/InterfaceConfigModel";
import StructConfigModel from "../models/config/types/StructConfigModel";
import IAmSlicedTypeModel from "../models/language/interfaces/types/IAmSlicedTypeModel";
import IAmProjectManager from "../ProjectManager";

export type TYPE_CONFIGURATIONS_DEF = ClassConfigModel | DelegateConfigModel | EnumConfigModel | InterfaceConfigModel | StructConfigModel

export default class RenderTypeArgs<TConfig extends TYPE_CONFIGURATIONS_DEF> {
  config: TConfig
  /**
   * A path to the file that includes it's name and extension.
   */

  fullTypeInfo: IAmSlicedTypeModel

  outputPath: string

  projManager: IAmProjectManager
}