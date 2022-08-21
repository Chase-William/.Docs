import MarkdownRenderer from './markdown/markdownRenderer';
import RenderManager from './renderer/RenderManager';
import Router from './Router';
import { execFileSync } from "child_process";
import { exit } from 'process';
import { handleError } from './error';
import { ProjectManager } from './ProjectManager';
import { rmSync } from 'fs';

const JSON_DIR = './json'

// Omit default node path and exe path from routing
const router = new Router(process.argv)

// Clean old info out 
rmSync('json/core-info', { recursive: true, force: true })
rmSync('.docs', { recursive: true, force: true })

const result = execFileSync(router.docsharkCoreExePath, [
  router.csProjPath,
  JSON_DIR
]);

if (result.byteLength != 0)
{
  handleError(result)
  exit(1)
}

const projManager = new ProjectManager()
projManager.load('json/core-info') 
const renderManager = new RenderManager(router.config, router.outputPath, new MarkdownRenderer(), projManager)
renderManager.render()

// Clean json
rmSync('json/core-info', { recursive: true, force: true })