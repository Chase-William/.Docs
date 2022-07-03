#### Todo List

- [x] Setup configuration for projects
- [ ] Integrate configuration into markdown rendering pipeline


- [x] Can we use .csproj path instead of *.xml & *.dll
  - [x] If we can, setup system to allow use of either approach
- Test deployment on a system where a user doesn't have .NET 6.0 already installed
- Test other language versions and framework versions to generate docs from
- Update `Charp` documentation
- Allow a param to be passed to cmd line like *--external* when running no config file
- Fix jest test for models other than config

### Basic Markdown Renderer Checklist

- [x] + prop type info
- [x] + method return type info
- [ ] + method return comments
- [x] + method param type info
- [ ] + method param comments
- [x] + field type info
- [x] + event type info
- [x] + "struct" to struct md files
- [x] + "class" to class md files
- [x] + "interface" to interface md files
- [x] + "delegate" to delegate md files
- [x] + "enum" to enum md files
- [x] + standardize ordering of accessibility modifier groupings

#### Bug Checklist

- [x] Nested types are missing encapsulating type in filename
- [x] Allow custom documentation base pathing

### Unit Testing

Needs to be remodeled as the system I devised for `Charp.Core` testing works better.

### Needed

- Implemented interface info needed
- Inherited classes info needed
- Use hyper-links for connecting types
- Table of contents needed
- Indicater for inherited members

### Markdown Standards

#### Accessibility modifier group ordering should be as follows:
- public
- protected
- internal
- internal protected
- private

#### Other info & modifiers are to be ordered as such:
- \<type\>
- const
- readonly
- static
- virtual
- abstract


### Development Dependencies

- .NET 6.0 -> `Charp.Core`
- Node 17.0+ *Recommended*

## Test Launch Options pre-bundle

### Use local `.csproj` with default output

```sh
node ./dist/app.js "C:\Dev\Charp\vendor\Charp.Core\test\Charp.Test.Data" -core "C:\Dev\Charp\vendor\Charp.Core\src\Charp.Runner\bin\Debug\net6.0\Charp.Runner.exe"
```

### Use specified `.csproj` with default output

```sh
node ./dist/app.js "C:\Dev\Charp\vendor\Charp.Core\test\Charp.Test.Data\Charp.Test.Data.csproj" -core "C:\Dev\Charp\vendor\Charp.Core\src\Charp.Runner\bin\Debug\net6.0\Charp.Runner.exe"
```

### Use specified `.csproj` & custom output

```sh
node ./dist/app.js "C:\Dev\Charp\vendor\Charp.Core\test\Charp.Test.Data\Charp.Test.Data.csproj" -o "example" -core "C:\Dev\Charp\vendor\Charp.Core\src\Charp.Runner\bin\Debug\net6.0\Charp.Runner.exe"
```

### Use `.dll` & `.xml` with default output
```sh
node ./dist/app.js -dll "C:\Dev\Charp\vendor\Charp.Core\test\Charp.Test.Data\bin\Debug\net6.0\Charp.Test.Data.dll" -xml "C:\Dev\Charp\vendor\Charp.Core\test\Charp.Test.Data\bin\Debug\net6.0\Charp.Test.Data.xml" -core "C:\Dev\Charp\vendor\Charp.Core\src\Charp.Runner\bin\Debug\net6.0\Charp.Runner.exe"
```
### Use `.dll` & `.xml` with custom output location & use perspective switch for internal

```sh
node ./dist/app.js -dll "C:\Dev\Charp\vendor\Charp.Core\test\Charp.Test.Data\bin\Debug\net6.0\Charp.Test.Data.dll" -xml "C:\Dev\Charp\vendor\Charp.Core\test\Charp.Test.Data\bin\Debug\net6.0\Charp.Test.Data.xml" -o "example/docs" -core "C:\Dev\Charp\vendor\Charp.Core\src\Charp.Runner\bin\Debug\net6.0\Charp.Runner.exe" --internal
```

## Test Launch Options post-bundle

```sh
charp "C:\Dev\Charp\vendor\Charp.Core\test\Charp.Test.Data"
```

### Use specified `.csproj` with default output

```sh
charp "C:\Dev\Charp\vendor\Charp.Core\test\Charp.Test.Data\Charp.Test.Data.csproj"
```

### Use specified `.csproj` & custom output

```sh
charp "C:\Dev\Charp\vendor\Charp.Core\test\Charp.Test.Data\Charp.Test.Data.csproj" -o example
```

### Use `.dll` & `.xml` with default output
```sh
charp -dll "C:\Dev\Charp\vendor\Charp.Core\test\Charp.Test.Data\bin\Debug\net6.0\Charp.Test.Data.dll" -xml "C:\Dev\Charp\vendor\Charp.Core\test\Charp.Test.Data\bin\Debug\net6.0\Charp.Test.Data.xml"
```
### Use `.dll` & `.xml` with custom output location & use perspective switch for internal

```sh
charp -dll "C:\Dev\Charp\vendor\Charp.Core\test\Charp.Test.Data\bin\Debug\net6.0\Charp.Test.Data.dll" -xml "C:\Dev\Charp\vendor\Charp.Core\test\Charp.Test.Data\bin\Debug\net6.0\Charp.Test.Data.xml" -o "example" --internal
```


```sh
C:\Users\Chase Roth\Desktop>charp -dll "C:\Dev\Charp\vendor\Charp.Core\test\Charp.Test.Data\bin\Debug\net6.0\Charp.Test.Data.dll" -xml "C:\Dev\Charp\vendor\Charp.Core\test\Charp.Test.Data\bin\Debug\net6.0\Charp.Test.Data.xml" -o "example" --internal

Unhandled exception. System.IO.FileNotFoundException: Could not find file 'C:\Users\Chase Roth\Desktop\-dll'.
File name: 'C:\Users\Chase Roth\Desktop\-dll'
   at Microsoft.Win32.SafeHandles.SafeFileHandle.CreateFile(String fullPath, FileMode mode, FileAccess access, FileShare share, FileOptions options)
   at Microsoft.Win32.SafeHandles.SafeFileHandle.Open(String fullPath, FileMode mode, FileAccess access, FileShare share, FileOptions options, Int64 preallocationSize)
   at System.IO.Strategies.OSFileStreamStrategy..ctor(String path, FileMode mode, FileAccess access, FileShare share, FileOptions options, Int64 preallocationSize)
   at System.IO.Strategies.FileStreamHelpers.ChooseStrategyCore(String path, FileMode mode, FileAccess access, FileShare share, FileOptions options, Int64 preallocationSize)
   at System.IO.Strategies.FileStreamHelpers.ChooseStrategy(FileStream fileStream, String path, FileMode mode, FileAccess access, FileShare share, Int32 bufferSize, FileOptions options, Int64 preallocationSize)
   at System.IO.File.OpenRead(String path)
   at System.Reflection.MetadataLoadContext.LoadFromAssemblyPath(String assemblyPath)
   at Charp.Core.Loaders.MetadataLoader.GetAssembly(MetadataLoadContext mlc, String dllPath) in C:\Dev\Charp\vendor\Charp.Core\src\Charp.Core\Loaders\MetadataLoader.cs:line 98
   at Charp.Core.Loaders.MetadataLoader.From(String dllPath, String xmlPath) in C:\Dev\Charp\vendor\Charp.Core\src\Charp.Core\Loaders\MetadataLoader.cs:line 40
   at Charp.Core.Charper.From(String dllPath, String xmlPath, String outputPath) in C:\Dev\Charp\vendor\Charp.Core\src\Charp.Core\Charper.cs:line 41
   at Charp.Runner.Program.Main(String[] args) in C:\Dev\Charp\vendor\Charp.Core\src\Charp.Runner\Program.cs:line 19
node:fs:1413
  handleErrorFromBinding(ctx);
```