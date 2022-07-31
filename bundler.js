/* eslint-disable @typescript-eslint/no-var-requires */
// Run this file after the "yarn bundle-node" script

const copydir = require('copy-dir')
const copydirSync = require('copy-dir/libs/copydirSync')
const fs = require('fs')
const path = require('path')

const DEPLOYABLE_DIR = 'deployable'
const DOCSHARK_CORE_PUBLISH_DIR = 'vendor/Docshark.Core/src/Docshark.Runner/bin/Release/net6.0/publish'
const DOCSHARK_CONFIG_DIR = 'configurations'

console.log('Starting Post-Bundler')

if (!fs.existsSync(DEPLOYABLE_DIR)) {
  throw Error('No deployable directory found. Ensure you are running "yarn bundle" before using this file.')
}

if (!fs.existsSync(DOCSHARK_CORE_PUBLISH_DIR)) {
  throw Error('No vendor Charp.Core directory found. Ensure you are running "yarn vendor" before using this file.')
}

copydirSync(DOCSHARK_CORE_PUBLISH_DIR, DEPLOYABLE_DIR);

const appFileDir = path.join(DEPLOYABLE_DIR, 'app.exe')
if (fs.existsSync(appFileDir))
  fs.renameSync(appFileDir, path.join(DEPLOYABLE_DIR, 'docshark.exe'))

{
  //#region Copy configuration files
  const files = fs.readdirSync(DOCSHARK_CONFIG_DIR)
  const DEPLOYABLE_CONFIG_DIR = path.join(DEPLOYABLE_DIR, DOCSHARK_CONFIG_DIR)
  if (!fs.existsSync(DEPLOYABLE_CONFIG_DIR))
    fs.mkdirSync(DEPLOYABLE_CONFIG_DIR)
  
  for (const file of files){
    // Copy files
    fs.copyFileSync(path.join(DOCSHARK_CONFIG_DIR, file), path.join(DEPLOYABLE_CONFIG_DIR, file))
  }
  //#endregion
}

console.log('Finished Bundling')