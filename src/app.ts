import MarkdownRenderer from './markdown/markdownRenderer';
import Nestable from './models/Nestable';
import ModelTree from './models/ModelTree';
import path = require('path');
import { rmSync } from 'fs';
// import ClassModel from './models/types/ClassModel'

const spawn = import('child_process');

console.log(process.argv)

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

spawn
  .then(
    (proc) => {
      // proc.execSync('start \"C:\\Dev\\Sharpocs\\src\\Docsharp\\bin\\Debug\\net5.0\"')
      proc.execFileSync('C:\\Dev\\Charp\\vendor\\Charp.Core\\src\\Charp\\bin\\Debug\\net5.0\\Charp.exe', [
        'C:\\Dev\\Charp\\vendor\\Charp.Core\\test\\Charp.Test.Data\\bin\\Debug\\net5.0\\Charp.Test.Data.dll',
        'C:\\Dev\\Charp\\vendor\\Charp.Core\\test\\Charp.Test.Data\\bin\\Debug\\net5.0\\Charp.Test.Data.xml',
        './json'
      ]);
    },
    (failed) => {
      console.log(failed);
    },
  )
  .finally(() => {
    const root = new ModelTree('Charp', null);
    root.readChildren('json', new Array<string>(), root);

    // Clean 
    rmSync('./docs', { recursive: true, force: true })

    const renderer = new MarkdownRenderer()
    root.render(renderer)
  });