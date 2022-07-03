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
C:\Users\Chase Roth\Desktop>charp "C:\Dev\Charp\vendor\Charp.Core\test\Charp.Test.Data"
node:internal/fs/utils:345
    throw err;
    ^

Error: ENOENT: no such file or directory, open 'C:\Users\Chase Roth\Desktop\configurations\external-perspective.json'
←[90m    at Object.openSync (node:fs:590:3)←[39m
    at Object.openSync (pkg/prelude/bootstrap.js:796:32)
←[90m    at Object.readFileSync (node:fs:458:35)←[39m
    at readFileSync (pkg/prelude/bootstrap.js:1082:36)
    at load (C:\snapshot\Charp\dist\models\config\Configuration.js)
    at getDefaultConfig (C:\snapshot\Charp\dist\models\config\Configuration.js)
    at loadConfiguration (C:\snapshot\Charp\dist\models\config\Configuration.js)
    at new Router (C:\snapshot\Charp\dist\Router.js)
    at Object.<anonymous> (C:\snapshot\Charp\dist\app.js)
    at Module._compile (pkg/prelude/bootstrap.js:1930:22) {
  errno: ←[33m-4058←[39m,
  syscall: ←[32m'open'←[39m,
  code: ←[32m'ENOENT'←[39m,
  path: ←[32m'C:\\Users\\Chase Roth\\Desktop\\configurations\\external-perspective.json'←[39m
}
```

```
C:\Users\Chase Roth\Desktop>charp "C:\Dev\Charp\vendor\Charp.Core\test\Charp.Test.Data\Charp.Test.Data.csproj" -c "C:\Dev\Charp\tests\config\data\override-external-config.json"
undefined:1
<Project Sdk="Microsoft.NET.Sdk"><PropertyGroup><TargetFramework>net6.0</TargetFramework><GenerateDocumentationFile>True</GenerateDocumentationFile></PropertyGroup></Project>
^

SyntaxError: Unexpected token < in JSON at position 0
    at JSON.parse (<anonymous>)
    at Object.parseToJSObject (C:\snapshot\Charp\node_modules\←[4mtypedjson←[24m\lib\cjs\helpers.js:59:17)
    at TypedJSON.parse (C:\snapshot\Charp\node_modules\←[4mtypedjson←[24m\lib\cjs\parser.js:135:30)
    at load (C:\snapshot\Charp\dist\models\config\Configuration.js)
    at loadConfiguration (C:\snapshot\Charp\dist\models\config\Configuration.js)
    at new Router (C:\snapshot\Charp\dist\Router.js)
    at Object.<anonymous> (C:\snapshot\Charp\dist\app.js)
    at Module._compile (pkg/prelude/bootstrap.js:1930:22)
←[90m    at Module._extensions..js (node:internal/modules/cjs/loader:1159:10)←[39m
←[90m    at Module.load (node:internal/modules/cjs/loader:981:32)←[39m

Node.js v18.1.0
```

```
C:\Users\Chase Roth\Desktop>charp -dll "C:\Dev\Charp\vendor\Charp.Core\test\Charp.Test.Data\bin\Debug\net6.0\Charp.Test.Data.dll" -xml "C:\Dev\Charp\vendor\Charp.Core\test\Charp.Test.Data\bin\Debug\net6.0\Charp.Test.Data.xml" -o "example" --internal
node:internal/fs/utils:345
    throw err;
    ^

Error: ENOENT: no such file or directory, open 'C:\Users\Chase Roth\Desktop\configurations\internal-perspective.json'
←[90m    at Object.openSync (node:fs:590:3)←[39m
    at Object.openSync (pkg/prelude/bootstrap.js:796:32)
←[90m    at Object.readFileSync (node:fs:458:35)←[39m
    at readFileSync (pkg/prelude/bootstrap.js:1082:36)
    at load (C:\snapshot\Charp\dist\models\config\Configuration.js)
    at getDefaultConfig (C:\snapshot\Charp\dist\models\config\Configuration.js)
    at loadConfiguration (C:\snapshot\Charp\dist\models\config\Configuration.js)
    at new Router (C:\snapshot\Charp\dist\Router.js)
    at Object.<anonymous> (C:\snapshot\Charp\dist\app.js)
    at Module._compile (pkg/prelude/bootstrap.js:1930:22) {
  errno: ←[33m-4058←[39m,
  syscall: ←[32m'open'←[39m,
  code: ←[32m'ENOENT'←[39m,
  path: ←[32m'C:\\Users\\Chase Roth\\Desktop\\configurations\\internal-perspective.json'←[39m
}

Node.js v18.1.0
```