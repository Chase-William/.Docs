# <code><span title="A class that extends &lt;see cref=&quot;T:DotDocs.Core.Models.LocalProjectModel&quot; /&gt; to add project information loading functionalities.">LocalProjectContext</span></code> *class*

```
ட LocalProjectModel
  ட Object
```

A class that extends <see cref="T:DotDocs.Core.Models.LocalProjectModel" /> to add project information loading functionalities.

## *public* Properties

### _Assembly <code><a href="..\Models\AssemblyModel.md">AssemblyModel</a></code>



### _DefinedTypes <code><span title="Represents a strongly typed list of objects that can be accessed by index. Provides methods to search, sort, and manipulate lists.">List</span><<a href="..\Models\Language\TypeModel.md">TypeModel</a>></code> *static* *readonly*



### _LocalProjects <code><span title="Represents a strongly typed list of objects that can be accessed by index. Provides methods to search, sort, and manipulate lists.">List</span><<a href="..\Models\LocalProjectModel.md">LocalProjectModel</a>></code>



### Assembly <code><span title="Represents an assembly, which is a reusable, versionable, and self-describing building block of a common language runtime application.">Assembly</span></code>

The reflection-only assembly once loaded.

### AssemblyId <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code>



### AssemblyLoadPath <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code>

The location of the assembly to be loaded.

### DocumentationPath <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code>

The path of the documentation if available.

### Id <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code> *static* *readonly*



### LocalProjects <code><a href="..\..\..\System\String.md">String[]</a></code> *static* *readonly*



### ProjectDirectory <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code>



### ProjectFileName <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code>



### ProjectName <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code>



### ProjectPath <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code>





## *public* Methods

### Dispose(...)

Disposes of unmanaged resources for this <see cref="!:LocalProject" /> only.
Does not dispose of children projects in <see cref="!:LocalProjects" />.



### Equals(...) *virtual*

```
ட Object
```



- *@param* obj <code><span title="Supports all classes in the .NET class hierarchy and provides low-level services to derived classes. This is the ultimate base class of all .NET classes; it is the root of the type hierarchy.">Object</span></code>

- *@returns* <code><span title="Represents a Boolean (&lt;see langword=&quot;true&quot; /&gt; or &lt;see langword=&quot;false&quot; /&gt;) value.">Boolean</span></code>

### Exists(...)

```
ட LocalProjectModel
```



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

### Load(...)

Loads the project's assembly and processes it's types.

- *@param* assemblies <code><a href="..\..\..\System\String.md">String[]</a></code>



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