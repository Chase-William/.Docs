# LocalProject undefined

```
ட Docshark.Core.Models.Project.Dependency
  ட System.Object
```

Represents a local project with a .csproj file.

## `public` Properties

### Assembly <code title="comments go here"><System.Reflection.Assembly></code>

Summary not provided.

### AssemblyLoadPath <code title="comments go here"><System.String></code>

Summary not provided.

### Codebase <code><<a href="./Docshark\Core\Mapper\Codebase\.md">Docshark.Core.Mapper.Codebase.CodebaseMapper</a>></code>

Summary not provided.

### DocumentationPath <code title="comments go here"><System.String></code>

Summary not provided.

### LocalProjects <code title="comments go here"><System.Collections.Generic.List`1[Docshark.Core.Models.Project.LocalProject]></code>

Collection of all <see cref="T:Docshark.Core.Models.Project.LocalProject" /> dependencies.

### ProjectDirectory <code title="comments go here"><System.String></code>

Directory where the .csproj file resides.

### ProjectFileName <code title="comments go here"><System.String></code>

Just the file name.

### ProjectName <code title="comments go here"><System.String></code>

Just the project name with no extension.

### ProjectPath <code title="comments go here"><System.String></code>

Entire path to file include name with extension.



## `public` Methods

### Dispose `virtual`

Disposes of unmanaged resources for this <see cref="T:Docshark.Core.Models.Project.LocalProject" /> only.
Does not dispose of children projects in <see cref="P:Docshark.Core.Models.Project.LocalProject.LocalProjects" />.

- *@returns* System.Void

### Exists

Determines if a projectFile
Uses a depth-first-search (DFS) approach.

- *@param* projectFile `System.String`

- *@returns* System.Boolean

### Load

Summary not provided.

- *@param* assemblies `System.String[]`
- *@param* getTypeCallback `System.Action`1[Docshark.Core.Models.Codebase.Types.TypeMember`2[System.Reflection.TypeInfo,LoxSmoke.DocXml.TypeComments]]`

- *@returns* System.Void

### Save

Summary not provided.

- *@param* baseOutputPath `System.String`

- *@returns* System.Void