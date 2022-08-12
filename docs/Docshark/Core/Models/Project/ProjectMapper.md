# ProjectMapper `class`

Summary not provided.

## `public` Properties

### Assemblies <code title="comments here">System.String[]</code> `readonly`

Summary not provided.

### RootProject <code><<a href="./LocalProject.md">Docshark.Core.Models.Project.LocalProject</a>></code> `readonly`

Summary not provided.



## `public` Methods

### BuildProject

Summary not provided.

- *@param* csProjPath <code title="comments here">System.String</code>

- *@returns* <code title="comments here">System.Void</code>

### Dispose `virtual`

Disposes all <see cref="T:Docshark.Core.Models.Project.LocalProject" /> within <see cref="P:Docshark.Core.Models.Project.ProjectMapper.RootProject" /> recursively.

- *@returns* <code title="comments here">System.Void</code>

### Load

Summary not provided.

- *@param* assemblies <code title="comments here">System.String[]</code>
- *@param* getTypeCallback <code title="comments here">System.Action`1[Docshark.Core.Models.Codebase.Types.TypeMember`2[System.Reflection.TypeInfo,LoxSmoke.DocXml.TypeComments]]</code>

- *@returns* <code title="comments here">System.Void</code>

### Prepare

Prepares given and all dependent .csproj files recursively for further processing.

- *@param* projectFile <code title="comments here">System.String</code>
- *@param* processedFiles <code title="comments here">System.Collections.Generic.List`1[System.String]</code>

- *@returns* <code title="comments here">System.Void</code>

### Save

Saves both the <see cref="T:Docshark.Core.Models.Project.ProjectMapper" /> and the root project's trees.

- *@param* projectOutPath <code title="comments here">System.String</code>
- *@param* metadataOutPath <code title="comments here">System.String</code>

- *@returns* <code title="comments here">System.Void</code>