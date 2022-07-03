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

export function loadConfiguration(basePath: string, configFilePath: string | null): Configuration {
  if (!configFilePath) {
    return getDefaultConfig(basePath, PERSPECTIVE_EXTERNAL)
  }

  if (configFilePath == PERSPECTIVE_EXTERNAL)
    return getDefaultConfig(basePath, PERSPECTIVE_EXTERNAL)
  else if (configFilePath == PERSPECTIVE_INTERNAL)
    return getDefaultConfig(basePath, PERSPECTIVE_INTERNAL)

  if (!existsSync(configFilePath)) {
    throw new Error('The configuration file at ' + configFilePath + ' does not exist.')
  }

  const userConfig = load(configFilePath)
  let defaultConfig: Configuration

  if (userConfig.perspective === PERSPECTIVE_EXTERNAL) {
    defaultConfig = getDefaultConfig(basePath, PERSPECTIVE_EXTERNAL)
  } else if (userConfig.perspective === PERSPECTIVE_INTERNAL) {
    defaultConfig = getDefaultConfig(basePath, PERSPECTIVE_INTERNAL)
  } else {
    throw new Error('Provided invalid value for "perspective": ' + userConfig.perspective)
  }

  defaultConfig.apply(userConfig)

  return defaultConfig
}

function getDefaultConfig(basePath: string, name: string): Configuration {
  return load(path.join(basePath, `configurations/${name}-perspective.json`))
}

function load(filePath: string): Configuration {
  return new TypedJSON(Configuration).parse(readFileSync(filePath, { encoding: 'utf-8' }))
}