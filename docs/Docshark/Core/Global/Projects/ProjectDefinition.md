# ProjectDefinition undefined

```
ட Docshark.Core.Global.Definition
  ட System.Object
```

Represents a .csproj and is referenced by <see cref="T:System.Reflection.Metadata.TypeDefinition" />s.

## `public` Properties

### LocalProjectDependencies <code title="comments go here"><System.String[]></code>

Summary not provided.

### ProjectDirectory <code title="comments go here"><System.String></code>

The location where the .csproj resides.

### ProjectFileName <code title="comments go here"><System.String></code>

The name of the project with its file extension.

### ProjectName <code title="comments go here"><System.String></code>

The name of the project.

### ProjectPath <code title="comments go here"><System.String></code>

A complete path to the project with the project file included.



## `public` Methods

### From

Summary not provided.

- *@param* projectName `System.String`
- *@param* projectFileName `System.String`
- *@param* projectDirectory `System.String`
- *@param* projectPath `System.String`
- *@param* projectDependencyNames `System.String[]`
- *@param* assembly `System.Reflection.Assembly`
- *@param* asmMapper `Docshark.Core.Global.Assemblies.AssemblyMapper`

- *@returns* Docshark.Core.Global.Projects.ProjectDefinition

### GetPrimaryKey `virtual`

Summary not provided.

- *@returns* System.String