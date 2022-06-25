/* eslint-disable @typescript-eslint/no-var-requires */
// Run this file after the "yarn bundle-node" script

const fs = require('fs')
const path = require('path')

const DEPLOYABLE_DIR = 'deployable'
const CHARP_CORE_DIR = 'vendor/Charp.Core/src/Charp.Runner/bin/Debug/net5.0'
const CHARP_CORE_LIBS = [
  'Charp.Core.dll',
  'Charp.Runner.exe',
  'DocXml.dll',
  'System.Collections.Immutable.dll',
  'System.Reflection.Metadata.dll',
  'System.Reflection.MetadataLoadContext.dll',
  'System.Runtime.CompilerServices.Unsafe.dll',
  'System.Text.Encodings.Web.dll',
  'System.Text.Json.dll'
]

console.log('Starting Post-Bundler')

if (!fs.existsSync(DEPLOYABLE_DIR)) {
  throw Error('No deployable directory found. Ensure you are running "yarn bundle" before using this file.')
}

if (!fs.existsSync(CHARP_CORE_DIR)) {
  throw Error('No vendor Charp.Core directory found. Ensure you are running "yarn vendor" before using this file.')
}

for (const file of CHARP_CORE_LIBS){
  // Copy files
  fs.copyFileSync(path.join(CHARP_CORE_DIR, file), path.join(DEPLOYABLE_DIR, file))
}

fs.renameSync(path.join(DEPLOYABLE_DIR, 'app.exe'), path.join(DEPLOYABLE_DIR, 'charp.exe'))

console.log('Finished Bundling')