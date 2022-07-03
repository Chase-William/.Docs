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
    return getDefaultConfig(PERSPECTIVE_EXTERNAL)
  }

  if (filePath == PERSPECTIVE_EXTERNAL)
    return getDefaultConfig(PERSPECTIVE_EXTERNAL)
  else if (filePath == PERSPECTIVE_INTERNAL)
    return getDefaultConfig(PERSPECTIVE_INTERNAL)

  if (!existsSync(filePath)) {
    throw new Error('The configuration file at ' + filePath + ' does not exist.')
  }

  const userConfig = load(filePath)
  let defaultConfig: Configuration

  if (userConfig.perspective === PERSPECTIVE_EXTERNAL) {
    defaultConfig = getDefaultConfig(PERSPECTIVE_EXTERNAL)
  } else if (userConfig.perspective === PERSPECTIVE_INTERNAL) {
    defaultConfig = getDefaultConfig(PERSPECTIVE_INTERNAL)
  } else {
    throw new Error('Provided invalid value for "perspective": ' + userConfig.perspective)
  }

  defaultConfig.apply(userConfig)

  return defaultConfig
}

function getDefaultConfig(name: string): Configuration {
  return load(path.join(process.cwd(), `configurations/${name}-perspective.json`))
}

function load(filePath: string): Configuration {
  return new TypedJSON(Configuration).parse(readFileSync(filePath, { encoding: 'utf-8' }))
}