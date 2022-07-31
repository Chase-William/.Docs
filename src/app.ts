import MarkdownRenderer from './markdown/markdownRenderer';
import ModelTree from './models/ModelTree';
import { readFileSync, rmSync } from 'fs';
import RenderManager from './renderer/RenderManager';
import Router from './Router';
import { execFileSync } from "child_process";
import { exit } from 'process';
import { handleError } from './error';
import { TypedJSON } from 'typedjson';
import TypeDefinition from './models/meta/TypeDefinition';

const JSON_DIR = './json'

// Omit default node path and exe path from routing
const router = new Router(process.argv)

const result = execFileSync(router.docsharkCoreExePath, [
  router.csProjPath,
  JSON_DIR
]);

if (result.byteLength != 0)
{
  handleError(result)
  exit(1)
}

const types = new TypedJSON(TypeDefinition).parseAsArray(readFileSync('json/core-data/meta/types.json', { encoding: 'utf-8' }))
export const TYPE_MAP = new Map<string, TypeDefinition>(types.map(entry => [entry.id, entry]))

const root = new ModelTree('Docshark', null);
root.readChildren('json/core-data/src', new Array<string>(), root);

// Clean old documentation 
rmSync(router.outputPath, { recursive: true, force: true })

const renderManager = new RenderManager()
renderManager.config = router.config
renderManager.path = router.outputPath
renderManager.renderer = new MarkdownRenderer()

root.render(renderManager)

// Clean json
// rmSync(JSON_DIR, { recursive: true, force: true })