# <code><span title="A class that represents an assembly as a model.">AssemblyModel</span></code> *class*

A class that represents an assembly as a model.

## *public* Properties

### Assembly <code><span title="A class that represents an assembly as a model.">Assembly</span></code>

The underlying assembly instance from the runtime.

### FullName <code><span title="A class that represents an assembly as a model.">String</span></code> *static* *readonly*

<inheritdoc cref="P:System.Reflection.Assembly.FullName" />

### Id <code><span title="A class that represents an assembly as a model.">String</span></code> *static* *readonly*

The id for this assembly.

### LocalProject <code><a href="LocalProjectModel.md">LocalProjectModel</a></code>

A reference to the local project that creates this assembly if it exists in the context.

### Name <code><span title="A class that represents an assembly as a model.">String</span></code> *static* *readonly*

<inheritdoc cref="P:System.Reflection.AssemblyName.Name" />

### Types <code><span title="A class that represents an assembly as a model.">List</span><<a href="Language\TypeModel.md">TypeModel</a>></code>

Contains all the types defined specifically in this assembly.



## *public* Methods

### Equals(...) *virtual*

```
ட Object
```



- *@param* obj <code><span title="A class that represents an assembly as a model.">Object</span></code>

- *@returns* <code><span title="A class that represents an assembly as a model.">Boolean</span></code>

### GetHashCode(...) *virtual*

```
ட Object
```



- *@returns* <code><span title="A class that represents an assembly as a model.">Int32</span></code>

### GetType(...)

```
ட Object
```



- *@returns* <code><span title="A class that represents an assembly as a model.">Type</span></code>

### ToString(...) *virtual*

```
ட Object
```



- *@returns* <code><span title="A class that represents an assembly as a model.">String</span></code>

## *protected* Methods

### Finalize(...) *virtual*

```
ட Object
```





### MemberwiseClone(...)

```
ட Object
```



- *@returns* <code><span title="A class that represents an assembly as a model.">Object</span></code>