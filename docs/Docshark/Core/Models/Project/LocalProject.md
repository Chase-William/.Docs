# LocalProject check renderTypeName #1

```
ட Docshark.Core.Models.Project.Dependency
  ட System.Object
```

Represents a local project with a .csproj file.

## `public` Properties

### Assembly check renderTypeName #2

Summary not provided.

### AssemblyLoadPath check renderTypeName #2

Summary not provided.

### Codebase <code><<a href="./..\..\Mapper\Codebase\CodebaseMapper.md">Docshark.Core.Mapper.Codebase.CodebaseMapper</a>></code>

Summary not provided.

### DocumentationPath check renderTypeName #2

Summary not provided.

### LocalProjects check renderTypeName #2

Collection of all <see cref="T:Docshark.Core.Models.Project.LocalProject" /> dependencies.

### ProjectDirectory check renderTypeName #2

Directory where the .csproj file resides.

### ProjectFileName check renderTypeName #2

Just the file name.

### ProjectName check renderTypeName #2

Just the project name with no extension.

### ProjectPath check renderTypeName #2

Entire path to file include name with extension.



## `public` Methods

### Dispose `virtual`

Disposes of unmanaged resources for this <see cref="T:Docshark.Core.Models.Project.LocalProject" /> only.
Does not dispose of children projects in <see cref="P:Docshark.Core.Models.Project.LocalProject.LocalProjects" />.

- *@returns* System.Void

### Exists

Determines if a projectFile
Uses a depth-first-search (DFS) approach.

- *@param* projectFile `check renderTypeName #2`

- *@returns* System.Boolean

### Load

Summary not provided.

- *@param* assemblies `check renderTypeName #2`
- *@param* getTypeCallback `check renderTypeName #2`

- *@returns* System.Void

### Save

Summary not provided.

- *@param* baseOutputPath `check renderTypeName #2`

- *@returns* System.Void