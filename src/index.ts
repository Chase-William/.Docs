import INestable from './models/INestable';
import ModelTree from './models/ModelTree';
// import ClassModel from './models/types/ClassModel'

const spawn = import('child_process');

spawn
  .then(
    (proc) => {
      // proc.execSync('start \"C:\\Dev\\Sharpocs\\src\\Docsharp\\bin\\Debug\\net5.0\"')
      proc.execFileSync('C:\\Dev\\Charp\\vendor\\Charp.Core\\src\\Charp\\bin\\Debug\\net5.0\\Charp.exe', [
        'C:\\Dev\\Charp\\vendor\\Charp.Core\\test\\Charp.Test.Data\\bin\\Debug\\net5.0\\Charp.Test.Data.dll',
        'C:\\Dev\\Charp\\vendor\\Charp.Core\\test\\Charp.Test.Data\\bin\\Debug\\net5.0\\Charp.Test.Data.xml',
      ]);
    },
    (failed) => {
      console.log(failed);
    },
  )
  .finally(() => {
    // Read JSON
    // Produce markdown files
    // let contents = readFileSync('./Charp/Test/Data/Classes/Boat.json');
    // let test = contents.toString('ascii')

    // Provide root directory as a starting point
    //readJsonMetadataRecursively(['Charp']);

    const root = new ModelTree('Charp', null);
    console.log('hello');
    root.readChildren(new Array<string>(), root);

    //console.log((root.children[0] as INestable).children[0])

    // const defaultSerialzer = new JsonSerializer()
    // const result = defaultSerialzer.deserializeObject<ClassModel>(test, ClassModel)
    // console.log(result.comments)

    // let json = JSON.parse(test)
    // console.log(json.FullName)
    // console.log(json.namespace)
    // console.log(json.properties)
    // console.log(json.comments)
    // console.log(json.comments.summary)
  });

// function readJsonMetadataRecursively(dir: Array<string>): void {
//   const dirs = readdirSync(dir.join('\\'))
//   for (const path of dirs) {
//     // Handle directory
//     if (!path.endsWith(".json")) {
//       dir.push(path)
//       console.log(dir.join('\\'))

//       readJsonMetadataRecursively(dir)
//       dir.pop()
//     } else { // Handle file
//       console.log('File: ' + path)
//     }
//   }
// }
