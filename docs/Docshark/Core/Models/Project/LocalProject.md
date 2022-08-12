# LocalProject `class`

```
ட Dependency
  ட Object
```

Represents a local project with a .csproj file.

## `public` Properties

### Assembly <code title="comments here">System.Reflection.Assembly</code>

Summary not provided.

### AssemblyLoadPath <code title="comments here">System.String</code>

Summary not provided.

### Codebase <code><<a href="./..\..\Mapper\Codebase\CodebaseMapper.md">Docshark.Core.Mapper.Codebase.CodebaseMapper</a>></code>

Summary not provided.

### DocumentationPath <code title="comments here">System.String</code>

Summary not provided.

### LocalProjects <code title="comments here">System.Collections.Generic.List`1[Docshark.Core.Models.Project.LocalProject]</code>

Collection of all <see cref="T:Docshark.Core.Models.Project.LocalProject" /> dependencies.

### ProjectDirectory <code title="comments here">System.String</code>

Directory where the .csproj file resides.

### ProjectFileName <code title="comments here">System.String</code>

Just the file name.

### ProjectName <code title="comments here">System.String</code>

Just the project name with no extension.

### ProjectPath <code title="comments here">System.String</code>

Entire path to file include name with extension.



## `public` Methods

### Dispose `virtual`

Disposes of unmanaged resources for this <see cref="T:Docshark.Core.Models.Project.LocalProject" /> only.
Does not dispose of children projects in <see cref="P:Docshark.Core.Models.Project.LocalProject.LocalProjects" />.

- *@returns* <code title="comments here">System.Void</code>

### Exists

Determines if a projectFile
Uses a depth-first-search (DFS) approach.

- *@param* projectFile <code title="comments here">System.String</code>

- *@returns* <code title="comments here">System.Boolean</code>

### Load

Summary not provided.

- *@param* assemblies <code title="comments here">System.String[]</code>
- *@param* getTypeCallback <code title="comments here">System.Action`1[Docshark.Core.Models.Codebase.Types.TypeMember`2[System.Reflection.TypeInfo,LoxSmoke.DocXml.TypeComments]]</code>

- *@returns* <code title="comments here">System.Void</code>

### Save

Summary not provided.

- *@param* baseOutputPath <code title="comments here">System.String</code>

- *@returns* <code title="comments here">System.Void</code>