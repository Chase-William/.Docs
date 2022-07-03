import MarkdownRenderer from './markdown/markdownRenderer';
import ModelTree from './models/ModelTree';
import { rmSync } from 'fs';
import RenderManager from './renderer/RenderManager';
import Router from './Router';
import { execFileSync } from "child_process";

const JSON_DIR = './json'

// Omit default node path and exe path from routing
const router = new Router(process.argv.slice(2))

console.log(router)

execFileSync(router.charpCoreExePath, [
  router.dllPath,
  router.xmlPath,
  JSON_DIR
]);

const root = new ModelTree('Charp', null);
root.readChildren('json', new Array<string>(), root);

let outputPath = './docs'
const indexOfOutput = process.argv.indexOf('-o')
if (indexOfOutput != -1) {
  const p =  process.argv[indexOfOutput + 1]
  if (p) {
    outputPath = p
  }       
}

// Clean 
rmSync(outputPath, { recursive: true, force: true })

const renderManager = new RenderManager()
renderManager.config = router.config
renderManager.path = outputPath
renderManager.renderer = new MarkdownRenderer()

root.render(renderManager)

// Clean json
rmSync(JSON_DIR, { recursive: true, force: true })