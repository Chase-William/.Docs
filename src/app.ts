import MarkdownRenderer from './markdown/markdownRenderer';
import ModelTree from './models/ModelTree';
import { readFileSync, rmSync } from 'fs';

const spawn = import('child_process');

// console.log(process.argv)

// spawn
//   .then(
//     (proc) => {
//       // proc.execSync('start \"C:\\Dev\\Sharpocs\\src\\Docsharp\\bin\\Debug\\net5.0\"')
//       proc.execFileSync('Charp.exe', [
//         process.argv[2],
//         process.argv[3],
//       ]);
//     },
//     (failed) => {
//       console.log(failed);
//     },
//   )
//   .finally(() => {
//     const root = new ModelTree('Charp', null);
//     root.readChildren(new Array<string>(), root);

//     const renderer = new MarkdownRenderer()
//     root.render(renderer)
//   });

const JSON_DIR = './json'
let charpCoreExe = 'Charp.Runner.exe'
let dll = process.argv[2]
let xml = process.argv[3]

// Check for flag that indicates we're developing
if (process.argv[2] === '--development-env') {
  const paths = JSON.parse(readFileSync('C:/Dev/Charp/runner.json', { encoding: 'utf-8' }))
  charpCoreExe = paths.charpCore
  dll = paths.dll
  xml = paths.xml
}

spawn
  .then(
    (proc) => {
      // proc.execSync('start \"C:\\Dev\\Sharpocs\\src\\Docsharp\\bin\\Debug\\net5.0\"')
      proc.execFileSync(charpCoreExe, [
        dll,
        xml,
        JSON_DIR
      ]);
    },
    (failed) => {
      console.log(failed);
    },
  )
  .finally(() => {
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
    // rmSync(outputPath, { recursive: true, force: true })

    const renderer = new MarkdownRenderer()
    renderer.path = outputPath
    root.render(renderer)

    rmSync(JSON_DIR, { recursive: true, force: true })
  });