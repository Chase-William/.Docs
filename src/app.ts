import MarkdownRenderer from './markdown/markdownRenderer';
import ModelTree from './models/ModelTree';
import { rmSync } from 'fs';
import RenderManager from './renderer/RenderManager';
import Router from './Router';
import { execFileSync } from "child_process";
import { exit } from 'process';
import { TypedJSON } from 'typedjson';
import ErrorRoot from './ErrorRoot';
import { handleError } from './error';

const JSON_DIR = './json'

// Omit default node path and exe path from routing
const router = new Router(process.argv)

console.log(process.cwd())

const result = execFileSync(router.docsharkCoreExePath, [
  router.csProjPath,
  JSON_DIR
]);

if (result.byteLength != 0)
{
  handleError(result)
  exit(0)
}

const root = new ModelTree('Docshark', null);
root.readChildren('json', new Array<string>(), root);

// Clean 
rmSync(router.outputPath, { recursive: true, force: true })

const renderManager = new RenderManager()
renderManager.config = router.config
renderManager.path = router.outputPath
renderManager.renderer = new MarkdownRenderer()

root.render(renderManager)

// Clean json
rmSync(JSON_DIR, { recursive: true, force: true })