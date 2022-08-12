# ProjectDefinition `class`

```
ட Definition
  ட Object
```

Represents a .csproj and is referenced by <see cref="T:System.Reflection.Metadata.TypeDefinition" />s.

## `public` Properties

### LocalProjectDependencies <code title="comments here">System.String[]</code>

Summary not provided.

### ProjectDirectory <code title="comments here">System.String</code>

The location where the .csproj resides.

### ProjectFileName <code title="comments here">System.String</code>

The name of the project with its file extension.

### ProjectName <code title="comments here">System.String</code>

The name of the project.

### ProjectPath <code title="comments here">System.String</code>

A complete path to the project with the project file included.



## `public` Methods

### From

Summary not provided.

- *@param* projectName <code title="comments here">System.String</code>
- *@param* projectFileName <code title="comments here">System.String</code>
- *@param* projectDirectory <code title="comments here">System.String</code>
- *@param* projectPath <code title="comments here">System.String</code>
- *@param* projectDependencyNames <code title="comments here">System.String[]</code>
- *@param* assembly <code title="comments here">System.Reflection.Assembly</code>
- *@param* asmMapper <code><<a href="./..\Assemblies\AssemblyMapper.md">Docshark.Core.Global.Assemblies.AssemblyMapper</a>></code>

- *@returns* <code><<a href="./ProjectDefinition.md">Docshark.Core.Global.Projects.ProjectDefinition</a>></code>

### GetPrimaryKey `virtual`

Summary not provided.

- *@returns* <code title="comments here">System.String</code>