/* eslint-disable @typescript-eslint/no-var-requires */
// Run this file after the "yarn bundle-node" script

const fs = require('fs')
const path = require('path')

const DEPLOYABLE_DIR = 'deployable'
const CHARP_CORE_PUBLISH_DIR = 'vendor/Charp.Core/src/Charp.Runner/bin/Release/net6.0/publish'
const CHARP_CONFIG_DIR = 'configurations'

console.log('Starting Post-Bundler')

if (!fs.existsSync(DEPLOYABLE_DIR)) {
  throw Error('No deployable directory found. Ensure you are running "yarn bundle" before using this file.')
}

if (!fs.existsSync(CHARP_CORE_PUBLISH_DIR)) {
  throw Error('No vendor Charp.Core directory found. Ensure you are running "yarn vendor" before using this file.')
}

{
  //#region Copy dotnet published assemblies
  const files = fs.readdirSync(CHARP_CORE_PUBLISH_DIR)

  for (const file of files){
    // Copy files
    fs.copyFileSync(path.join(CHARP_CORE_PUBLISH_DIR, file), path.join(DEPLOYABLE_DIR, file))
  }
  //#endregion
}

const appFileDir = path.join(DEPLOYABLE_DIR, 'app.exe')
if (fs.existsSync(appFileDir))
  fs.renameSync(appFileDir, path.join(DEPLOYABLE_DIR, 'charp.exe'))

{
  //#region Copy configuration files
  const files = fs.readdirSync(CHARP_CONFIG_DIR)
  const DEPLOYABLE_CONFIG_DIR = path.join(DEPLOYABLE_DIR, CHARP_CONFIG_DIR)
  if (!fs.existsSync(DEPLOYABLE_CONFIG_DIR))
    fs.mkdirSync(DEPLOYABLE_CONFIG_DIR)
  
  for (const file of files){
    // Copy files
    fs.copyFileSync(path.join(CHARP_CONFIG_DIR, file), path.join(DEPLOYABLE_CONFIG_DIR, file))
  }
  //#endregion
}

console.log('Finished Bundling')