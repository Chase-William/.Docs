import { existsSync, readFileSync } from "fs";
import path = require("path");
import { jsonMember, jsonObject, TypedJSON } from "typedjson";
import MemberConfig from "./MemberConfig";
import TypeConfig from "./TypeConfig";

/**
 * Default perspective values
 */
export const PERSPECTIVE_EXTERNAL = 'external'
export const PERSPECTIVE_INTERNAL = 'internal'
export const PERSPECTIVE_EXTERNAL_FILEPATH = './configurations/external-perspective.json'
export const PERSPECTIVE_INTERNAL_FILEPATH = './configurations/internal-perspective.json'

@jsonObject
export default class Configuration {
  @jsonMember(String)
  perspective: string = PERSPECTIVE_EXTERNAL
  @jsonMember(TypeConfig)
  type: TypeConfig
  @jsonMember(MemberConfig)
  member: MemberConfig

  apply(config: Configuration): void {
    if (config.type)
      this.type.apply(config.type)
    if (config.member)
      this.member.apply(config.member)
  }
}

export function loadConfiguration(filePath: string | null): Configuration {
  if (!filePath) {
    return load(path.join(process.cwd(), 'configurations/external-perspective.json'))
  }

  if (!existsSync(filePath)) {
    throw new Error('The configuration file at ' + filePath + ' does not exist.')
  }

  const userConfig = load(filePath)
  let defaultConfig: Configuration

  if (userConfig.perspective === PERSPECTIVE_EXTERNAL) {
    defaultConfig = load(PERSPECTIVE_EXTERNAL_FILEPATH)
  } else if (userConfig.perspective === PERSPECTIVE_INTERNAL) {
    defaultConfig = load(PERSPECTIVE_INTERNAL_FILEPATH)
  } else {
    throw new Error('Provided invalid value for "perspective": ' + userConfig.perspective)
  }

  defaultConfig.apply(userConfig)

  return defaultConfig
}

function load(filePath: string): Configuration {
  return new TypedJSON(Configuration).parse(readFileSync(filePath, { encoding: 'utf-8' }))
}