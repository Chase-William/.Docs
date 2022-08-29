# <code><span title="A class that extends <see cref="T:DotDocs.Core.Models.LocalProjectModel" /> to add project information loading functionalities.">LocalProjectContext</span></code> *class*

```
ட LocalProjectModel
  ட Object
```

A class that extends <see cref="T:DotDocs.Core.Models.LocalProjectModel" /> to add project information loading functionalities.

## *public* Properties

### _Assembly <code><a href="..\Models\AssemblyModel.md">AssemblyModel</a></code>



### _DefinedTypes <code><span title="A class that extends <see cref="T:DotDocs.Core.Models.LocalProjectModel" /> to add project information loading functionalities.">List</span><<a href="..\Models\Language\TypeModel.md">TypeModel</a>></code> *static* *readonly*



### _LocalProjects <code><span title="A class that extends <see cref="T:DotDocs.Core.Models.LocalProjectModel" /> to add project information loading functionalities.">List</span><<a href="..\Models\LocalProjectModel.md">LocalProjectModel</a>></code>



### Assembly <code><span title="A class that extends <see cref="T:DotDocs.Core.Models.LocalProjectModel" /> to add project information loading functionalities.">Assembly</span></code>

The reflection-only assembly once loaded.

### AssemblyId <code><span title="A class that extends <see cref="T:DotDocs.Core.Models.LocalProjectModel" /> to add project information loading functionalities.">String</span></code>



### AssemblyLoadPath <code><span title="A class that extends <see cref="T:DotDocs.Core.Models.LocalProjectModel" /> to add project information loading functionalities.">String</span></code>

The location of the assembly to be loaded.

### DocumentationPath <code><span title="A class that extends <see cref="T:DotDocs.Core.Models.LocalProjectModel" /> to add project information loading functionalities.">String</span></code>

The path of the documentation if available.

### Id <code><span title="A class that extends <see cref="T:DotDocs.Core.Models.LocalProjectModel" /> to add project information loading functionalities.">String</span></code> *static* *readonly*



### LocalProjects <code><span title="A class that extends <see cref="T:DotDocs.Core.Models.LocalProjectModel" /> to add project information loading functionalities.">String[]</span></code> *static* *readonly*



### ProjectDirectory <code><span title="A class that extends <see cref="T:DotDocs.Core.Models.LocalProjectModel" /> to add project information loading functionalities.">String</span></code>



### ProjectFileName <code><span title="A class that extends <see cref="T:DotDocs.Core.Models.LocalProjectModel" /> to add project information loading functionalities.">String</span></code>



### ProjectName <code><span title="A class that extends <see cref="T:DotDocs.Core.Models.LocalProjectModel" /> to add project information loading functionalities.">String</span></code>



### ProjectPath <code><span title="A class that extends <see cref="T:DotDocs.Core.Models.LocalProjectModel" /> to add project information loading functionalities.">String</span></code>





## *public* Methods

### Dispose(...)

Disposes of unmanaged resources for this <see cref="!:LocalProject" /> only.
Does not dispose of children projects in <see cref="!:LocalProjects" />.



### Equals(...) *virtual*

```
ட Object
```



- *@param* obj <code><span title="A class that extends <see cref="T:DotDocs.Core.Models.LocalProjectModel" /> to add project information loading functionalities.">Object</span></code>

- *@returns* <code><span title="A class that extends <see cref="T:DotDocs.Core.Models.LocalProjectModel" /> to add project information loading functionalities.">Boolean</span></code>

### Exists(...)

```
ட LocalProjectModel
```



- *@param* projectFile <code><span title="A class that extends <see cref="T:DotDocs.Core.Models.LocalProjectModel" /> to add project information loading functionalities.">String</span></code>

- *@returns* <code><span title="A class that extends <see cref="T:DotDocs.Core.Models.LocalProjectModel" /> to add project information loading functionalities.">Boolean</span></code>

### GetHashCode(...) *virtual*

```
ட Object
```



- *@returns* <code><span title="A class that extends <see cref="T:DotDocs.Core.Models.LocalProjectModel" /> to add project information loading functionalities.">Int32</span></code>

### GetType(...)

```
ட Object
```



- *@returns* <code><span title="A class that extends <see cref="T:DotDocs.Core.Models.LocalProjectModel" /> to add project information loading functionalities.">Type</span></code>

### Load(...)

Loads the project's assembly and processes it's types.

- *@param* assemblies <code><span title="A class that extends <see cref="T:DotDocs.Core.Models.LocalProjectModel" /> to add project information loading functionalities.">String[]</span></code>



### ToString(...) *virtual*

```
ட Object
```



- *@returns* <code><span title="A class that extends <see cref="T:DotDocs.Core.Models.LocalProjectModel" /> to add project information loading functionalities.">String</span></code>

## *protected* Methods

### Finalize(...) *virtual*

```
ட Object
```





### MemberwiseClone(...)

```
ட Object
```



- *@returns* <code><span title="A class that extends <see cref="T:DotDocs.Core.Models.LocalProjectModel" /> to add project information loading functionalities.">Object</span></code>