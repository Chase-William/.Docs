import MarkdownRenderer from './markdown/markdownRenderer';
import { readFileSync, rmSync } from 'fs';
import RenderManager from './renderer/RenderManager';
import Router from './Router';
import { execFileSync } from "child_process";
import { exit } from 'process';
import { handleError } from './error';
import { TypedJSON } from 'typedjson';
import TypeDefinition from './models/global/TypeDefinition';
import CodebaseManager from './models/global/CodebaseManager';
import Namespace from './models/Namespace';

const JSON_DIR = './json'

// Omit default node path and exe path from routing
const router = new Router(process.argv)

// const result = execFileSync(router.docsharkCoreExePath, [
//   router.csProjPath,
//   JSON_DIR
// ]);

// if (result.byteLength != 0)
// {
//   handleError(result)
//   exit(1)
// }

const projectName = router.csProjPath.substring(router.csProjPath.lastIndexOf('\\') + 1, router.csProjPath.lastIndexOf('.'))

const codebaseManager = new CodebaseManager()
codebaseManager.load('json/core-info', projectName) 

// const types = new TypedJSON(TypeDefinition).parseAsArray(readFileSync('json/core-info/meta/types.json', { encoding: 'utf-8' }))
// export const TYPE_MAP = new Map<string, TypeDefinition>(types.map(entry => [entry.id, entry]))

// const root = new Namespace(projectName, null);
// root.parseChildren('json/core-info/project', new Array<string>(), root);
// root.bindToCodebaseMap(globalMapManager)

// Clean old documentation 
rmSync(router.outputPath, { recursive: true, force: true })

const renderManager = new RenderManager()
renderManager.config = router.config
renderManager.path = router.outputPath
renderManager.map = codebaseManager
renderManager.renderer = new MarkdownRenderer()

renderManager.render(codebaseManager)

// root.render(renderManager)

// Clean json
// rmSync(JSON_DIR, { recursive: true, force: true })