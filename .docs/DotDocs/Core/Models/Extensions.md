# <code><span title="A static class that exists purely to contain extension methods.">Extensions</span></code> *class*

A static class that exists purely to contain extension methods.



## *public* Methods

### Equals(...) *virtual*

```
ட Object
```



- *@param* obj <code><span title="Supports all classes in the .NET class hierarchy and provides low-level services to derived classes. This is the ultimate base class of all .NET classes; it is the root of the type hierarchy.">Object</span></code>

- *@returns* <code><span title="Represents a Boolean (&lt;see langword=&quot;true&quot; /&gt; or &lt;see langword=&quot;false&quot; /&gt;) value.">Boolean</span></code>

### GetAssemblyId(...)

Gets a unique idi for an assembly.

- *@param* assembly <code><span title="Represents an assembly, which is a reusable, versionable, and self-describing building block of a common language runtime application.">Assembly</span></code>

- *@returns* <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code>

### GetDesiredEvents(...)

Gets a list of desired events that DotDocs will only filter down further as needed.

- *@param* type <code><span title="Represents type declarations: class types, interface types, array types, value types, enumeration types, type parameters, generic type definitions, and open or closed constructed generic types.">Type</span></code>

- *@returns* <code><span title="">IEnumerable</span><<span title="Discovers the attributes of an event and provides access to event metadata.">EventInfo</span>></code>

### GetDesiredFields(...)

Gets a list of the desired fields that DotDocs will only filter down further as needed.
This method will prevent the returning of generates fields for properties.

- *@param* type <code><span title="Represents type declarations: class types, interface types, array types, value types, enumeration types, type parameters, generic type definitions, and open or closed constructed generic types.">Type</span></code>

- *@returns* <code><span title="">IEnumerable</span><<span title="Discovers the attributes of a field and provides access to field metadata.">FieldInfo</span>></code>

### GetDesiredMethods(...)

Gets a list of desired methods that DotDocs will only filter down further as needed. 
This method will prevent the returning of generates methods for property getter and setters.

- *@param* type <code><span title="Represents type declarations: class types, interface types, array types, value types, enumeration types, type parameters, generic type definitions, and open or closed constructed generic types.">Type</span></code>

- *@returns* <code><span title="">IEnumerable</span><<span title="Discovers the attributes of a method and provides access to method metadata.">MethodInfo</span>></code>

### GetDesiredProperties(...)

Gets a list of the desired properties that DotDocs will only filter down further as needed.

- *@param* type <code><span title="Represents type declarations: class types, interface types, array types, value types, enumeration types, type parameters, generic type definitions, and open or closed constructed generic types.">Type</span></code>

- *@returns* <code><span title="">IEnumerable</span><<span title="Discovers the attributes of a property and provides access to property metadata.">PropertyInfo</span>></code>

### GetEnumDesiredFields(...)

Gets a list of desired enums that DotDocs will only filter down further as needed.
This methid will prevent the returning of any compiler generates fields.

- *@param* type <code><span title="Represents type declarations: class types, interface types, array types, value types, enumeration types, type parameters, generic type definitions, and open or closed constructed generic types.">Type</span></code>

- *@returns* <code><span title="">IEnumerable</span><<span title="Discovers the attributes of a field and provides access to field metadata.">FieldInfo</span>></code>

### GetHashCode(...) *virtual*

```
ட Object
```



- *@returns* <code><span title="Represents a 32-bit signed integer.">Int32</span></code>

### GetProjectId(...)

Gets a unique idenfier for a local project.

- *@param* project <code><a href="LocalProjectModel.md">LocalProjectModel</a></code>

- *@returns* <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code>

### GetType(...)

```
ட Object
```



- *@returns* <code><span title="Represents type declarations: class types, interface types, array types, value types, enumeration types, type parameters, generic type definitions, and open or closed constructed generic types.">Type</span></code>

### GetTypeId(...)

Gets a unique identifier for a type.

- *@param* type <code><span title="Represents type declarations: class types, interface types, array types, value types, enumeration types, type parameters, generic type definitions, and open or closed constructed generic types.">Type</span></code>

- *@returns* <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code>

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