const spawn = import('child_process')

spawn.then((proc) => {
  // proc.execSync('start \"C:\\Dev\\Sharpocs\\src\\Docsharp\\bin\\Debug\\net5.0\"')
  proc.execFileSync(
    'C:\\Dev\\Charp\\vendor\\Charp.Core\\src\\Charp\\bin\\Debug\\net5.0\\Charp.exe', [ 
      'C:\\Dev\\Charp\\vendor\\Charp.Core\\test\\Charp.Test.Data\\bin\\Debug\\net5.0\\Charp.Test.Data.dll', 
      'C:\\Dev\\Charp\\vendor\\Charp.Core\\test\\Charp.Test.Data\\bin\\Debug\\net5.0\\Charp.Test.Data.xml' 
    ])
}, (failed) => {
  console.log(failed)
}).finally(() => {
  // Read JSON
  // Produce markdown files
})
// C:\Dev\Sharpocs\src\Docsharp\bin\Debug\net5.0\Docsharp.exe