# <code><span title="Represents a local project with a .csproj file.">LocalProjectModel</span></code> *class*

Represents a local project with a .csproj file.

## *public* Properties

### _Assembly <code><a href="AssemblyModel.md">AssemblyModel</a></code>

The assembly model instance this project generates.

### _DefinedTypes <code><span title="Represents a strongly typed list of objects that can be accessed by index. Provides methods to search, sort, and manipulate lists.">List</span><<a href="Language\TypeModel.md">TypeModel</a>></code> *static* *readonly*

Contains all the projects declared in this project.

### _LocalProjects <code><span title="Represents a strongly typed list of objects that can be accessed by index. Provides methods to search, sort, and manipulate lists.">List</span><<a href="LocalProjectModel.md">LocalProjectModel</a>></code>

Collection of all <see cref="T:DotDocs.Core.Models.LocalProjectModel" /> dependencies.

### AssemblyId <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code>

A unique identifier to the assembly this project produces.

### Id <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code> *static* *readonly*

A unique idenfitier for this project.

### LocalProjects <code><span title="Represents text as a sequence of UTF-16 code units.">String[]</span></code> *static* *readonly*

Contains unique identifiers to local projects that are dependencies.

### ProjectDirectory <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code>

Directory where the .csproj file resides.

### ProjectFileName <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code>

Just the file name.

### ProjectName <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code>

Just the project name with no extension.

### ProjectPath <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code>

Entire path to file include name with extension.



## *public* Methods

### Equals(...) *virtual*

```
ட Object
```



- *@param* obj <code><span title="Supports all classes in the .NET class hierarchy and provides low-level services to derived classes. This is the ultimate base class of all .NET classes; it is the root of the type hierarchy.">Object</span></code>

- *@returns* <code><span title="Represents a Boolean (&lt;see langword=&quot;true&quot; /&gt; or &lt;see langword=&quot;false&quot; /&gt;) value.">Boolean</span></code>

### Exists(...)

Determines if a projectFile exists recursively from here down into other projects.
Uses a depth-first-search (DFS) approach.

- *@param* projectFile <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code>

- *@returns* <code><span title="Represents a Boolean (&lt;see langword=&quot;true&quot; /&gt; or &lt;see langword=&quot;false&quot; /&gt;) value.">Boolean</span></code>

### GetHashCode(...) *virtual*

```
ட Object
```



- *@returns* <code><span title="Represents a 32-bit signed integer.">Int32</span></code>

### GetType(...)

```
ட Object
```



- *@returns* <code><span title="Represents type declarations: class types, interface types, array types, value types, enumeration types, type parameters, generic type definitions, and open or closed constructed generic types.">Type</span></code>

### ToString(...) *virtual*

```
ட Object
```



- *@returns* <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code>

## *protected* Methods

### Finalize(...) *virtual*

```
ட Object
```





### MemberwiseClone(...)

```
ட Object
```



- *@returns* <code><span title="Supports all classes in the .NET class hierarchy and provides low-level services to derived classes. This is the ultimate base class of all .NET classes; it is the root of the type hierarchy.">Object</span></code>