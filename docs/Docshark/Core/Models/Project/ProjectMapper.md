# ProjectMapper undefined

Summary not provided.

## `public` Properties

### Assemblies <code title="comments go here"><System.String[]></code> `readonly`

Summary not provided.

### RootProject <code><<a href="./Docshark\Core\Models\Project.md">Docshark.Core.Models.Project.LocalProject</a>></code> `readonly`

Summary not provided.



## `public` Methods

### BuildProject

Summary not provided.

- *@param* csProjPath `System.String`

- *@returns* System.Void

### Dispose `virtual`

Disposes all <see cref="T:Docshark.Core.Models.Project.LocalProject" /> within <see cref="P:Docshark.Core.Models.Project.ProjectMapper.RootProject" /> recursively.

- *@returns* System.Void

### Load

Summary not provided.

- *@param* assemblies `System.String[]`
- *@param* getTypeCallback `System.Action`1[Docshark.Core.Models.Codebase.Types.TypeMember`2[System.Reflection.TypeInfo,LoxSmoke.DocXml.TypeComments]]`

- *@returns* System.Void

### Prepare

Prepares given and all dependent .csproj files recursively for further processing.

- *@param* projectFile `System.String`
- *@param* processedFiles `System.Collections.Generic.List`1[System.String]`

- *@returns* System.Void

### Save

Saves both the <see cref="T:Docshark.Core.Models.Project.ProjectMapper" /> and the root project's trees.

- *@param* projectOutPath `System.String`
- *@param* metadataOutPath `System.String`

- *@returns* System.Void