# <code><span title="A class that provides a means to build and load a project with all its local project dependencies, assemblies, and types.">ProjectLoadContext</span></code> *class*

A class that provides a means to build and load a project with all its local project dependencies, assemblies, and types.

## *public* Properties

### Assemblies <code><span title="">IReadOnlyDictionary</span><<span title="Represents text as a sequence of UTF-16 code units.">String</span>, <a href="..\Models\AssemblyModel.md">AssemblyModel</a>></code> *static* *readonly*

Assemblies needed by the root project and it's dependencies.

### LocalProjects <code><span title="Represents a strongly typed list of objects that can be accessed by index. Provides methods to search, sort, and manipulate lists.">List</span><<a href="..\Models\LocalProjectModel.md">LocalProjectModel</a>></code> *static* *readonly*

All local projects involved in the build process.

### RootProject <code><a href="..\Models\LocalProjectModel.md">LocalProjectModel</a></code> *static* *readonly*

The root project all others stem from.

### Types <code><span title="">IReadOnlyDictionary</span><<span title="Represents text as a sequence of UTF-16 code units.">String</span>, <a href="..\Models\Language\TypeModel.md">TypeModel</a>></code> *static* *readonly*

Types needed by the root project and it's dependencies.



## *public* Methods

### BuildProject(...)

Build the project and either report the error if the build fails or if it succeeds gather information
from the build like projects local projects needed and assemblies required.

- *@param* csProjPath <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code>



### Dispose(...) *virtual*

Disposes all <see cref="T:DotDocs.Core.Models.LocalProjectModel" /> within <see cref="F:DotDocs.Core.Loader.ProjectLoadContext.rootProject" /> recursively.



### Equals(...) *virtual*

```
ட Object
```



- *@param* obj <code><span title="Supports all classes in the .NET class hierarchy and provides low-level services to derived classes. This is the ultimate base class of all .NET classes; it is the root of the type hierarchy.">Object</span></code>

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

### LoadDocumentation(...)

Loads the comments associated with each type. This function depends on <see cref="P:DotDocs.Core.Loader.ProjectLoadContext.Assemblies" />
as it iterates through the types reference in the <see cref="P:DotDocs.Core.Models.AssemblyModel.Types" />. Therefore, it can load
the documentation file associated with that assembly once and apply comments it to all types. Other approaches
would result in more redundent file loading.



### LoadTypes(...)

Load all types used by the root project and it's project dependencies.



### Prepare(...)

Prepares given and all dependent .csproj files recursively for further processing.

- *@param* projectFile <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code>
- *@param* processedFiles <code><span title="Represents a strongly typed list of objects that can be accessed by index. Provides methods to search, sort, and manipulate lists.">List</span><<span title="Represents text as a sequence of UTF-16 code units.">String</span>></code>



### Save(...)

Writes the <see cref="P:DotDocs.Core.Loader.ProjectLoadContext.Assemblies" />, <see cref="P:DotDocs.Core.Loader.ProjectLoadContext.LocalProjects" />, and <see cref="P:DotDocs.Core.Loader.ProjectLoadContext.Types" /> collections to file.

- *@param* outputPath <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code>



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

## *public* Fields

### ASSEMBLIES_FILE <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code> *const*



### PROJECTS_FILE <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code> *const*



### TYPES_FILE <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code> *const*

