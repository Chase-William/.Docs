# <code><span title="Represents a local project with a .csproj file.">LocalProjectModel</span></code> *class*

Represents a local project with a .csproj file.

## *public* Properties

### Assembly <code><a href="AssemblyModel.md">AssemblyModel</a></code>

Summary not provided.

### AssemblyId <code><span title="Represents a local project with a .csproj file.">String</span></code>

A unique identifier to the assembly this project produces.

### DefinedTypes <code><span title="Represents a local project with a .csproj file.">List</span><<a href="Language\TypeModel.md">TypeModel</a>></code> *static* *readonly*

Summary not provided.

### Id <code><span title="Represents a local project with a .csproj file.">String</span></code> *static* *readonly*

A unique idenfitier for this project.

### LocalProjects <code><span title="Represents a local project with a .csproj file.">String[]</span></code> *static* *readonly*

Contains unique identifiers to local projects that are dependencies.

### LocalProjectsAsObjects <code><span title="Represents a local project with a .csproj file.">List</span><<a href="LocalProjectModel.md">LocalProjectModel</a>></code>

Summary not provided.

### ProjectDirectory <code><span title="Represents a local project with a .csproj file.">String</span></code>

Directory where the .csproj file resides.

### ProjectFileName <code><span title="Represents a local project with a .csproj file.">String</span></code>

Just the file name.

### ProjectName <code><span title="Represents a local project with a .csproj file.">String</span></code>

Just the project name with no extension.

### ProjectPath <code><span title="Represents a local project with a .csproj file.">String</span></code>

Entire path to file include name with extension.



## *public* Methods

### Equals(...) *virtual*

Summary not provided.

- *@param* obj <code><span title="Represents a local project with a .csproj file.">Object</span></code>

- *@returns* <code><span title="Represents a local project with a .csproj file.">Boolean</span></code>

### Exists(...)

Determines if a projectFile
Uses a depth-first-search (DFS) approach.

- *@param* projectFile <code><span title="Represents a local project with a .csproj file.">String</span></code>

- *@returns* <code><span title="Represents a local project with a .csproj file.">Boolean</span></code>

### GetHashCode(...) *virtual*

Summary not provided.

- *@returns* <code><span title="Represents a local project with a .csproj file.">Int32</span></code>

### GetType(...)

Summary not provided.

- *@returns* <code><span title="Represents a local project with a .csproj file.">Type</span></code>

### ToString(...) *virtual*

Summary not provided.

- *@returns* <code><span title="Represents a local project with a .csproj file.">String</span></code>

## *protected* Methods

### Finalize(...) *virtual*

Summary not provided.



### MemberwiseClone(...)

Summary not provided.

- *@returns* <code><span title="Represents a local project with a .csproj file.">Object</span></code>