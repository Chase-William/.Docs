const spawn = import('child_process')

spawn.then((proc) => {
  // proc.execSync('start \"C:\\Dev\\Sharpocs\\src\\Docsharp\\bin\\Debug\\net5.0\"')
  proc.execFileSync('C:\\Dev\\Sharpocs\\src\\Docsharp\\bin\\Debug\\net5.0\\Docsharp.exe')  
}, (failed) => {
  console.log(failed)
}).finally(() => {
  // Read JSON
  // Produce markdown files
})
// C:\Dev\Sharpocs\src\Docsharp\bin\Debug\net5.0\Docsharp.exe