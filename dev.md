#### Todo List

- [x] Setup configuration for projects
- [x] Integrate configuration into markdown rendering pipeline
- [x] Allow a param to be passed to cmd line like *--external* when running no config file
- [x] Can we use .csproj path instead of *.xml & *.dll
  - [x] If we can, setup system to allow use of either approach
- [ ] Add more config options for properties
- [ ] Test deployment on a system where a user doesn't have .NET 6.0 already installed
- [ ] Add config for method param and return type rendering control
- [ ] Type Params in Model like T1 & T2 don't have `TypeDefinitions`


- Test other language versions and framework versions to generate docs from
- Update `Charp` documentation
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