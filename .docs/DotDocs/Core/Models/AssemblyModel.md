# <code><span title="A class that represents an assembly as a model.">AssemblyModel</span></code> *class*

A class that represents an assembly as a model.

## *public* Properties

### Assembly <code><span title="Represents an assembly, which is a reusable, versionable, and self-describing building block of a common language runtime application.">Assembly</span></code>

The underlying assembly instance from the runtime.

### FullName <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code> *static* *readonly*

<inheritdoc cref="P:System.Reflection.Assembly.FullName" />

### Id <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code> *static* *readonly*

The id for this assembly.

### LocalProject <code><a href="LocalProjectModel.md">LocalProjectModel</a></code>

A reference to the local project that creates this assembly if it exists in the context.

### Name <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code> *static* *readonly*

<inheritdoc cref="P:System.Reflection.AssemblyName.Name" />

### Types <code><span title="Represents a strongly typed list of objects that can be accessed by index. Provides methods to search, sort, and manipulate lists.">List</span><<a href="Language\TypeModel.md">TypeModel</a>></code>

Contains all the types defined specifically in this assembly.



## *public* Methods

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