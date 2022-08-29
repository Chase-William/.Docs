# <code><span title="">TypeModel</span></code> *class*

```
ட Model
  ட Object
```



## *public* Properties

### Assembly <code><a href="..\AssemblyModel.md">AssemblyModel</a></code>



### AssemblyId <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code> *static* *readonly*



### BaseType <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code> *static* *readonly*

Collection of members always present in an object.
Works for structs too because they are <see cref="T:System.ValueType" /> which is a class behind the scenes.

### Comments <code><span title="Class, Struct or  delegate comments">TypeComments</span></code>



### Events <code><span title="">EventModel[]</span></code> *static* *readonly*



### Fields <code><span title="">FieldModel[]</span></code> *static* *readonly*



### FullName <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code> *static* *readonly*



### GenericTypeArguments <code><span title="">String[]</span></code> *static* *readonly*

Contains the primary keys to each type's definition.

### GenericTypeParameters <code><span title="">String[]</span></code> *static* *readonly*

Contains the primary keys to each type's definition.

### Id <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code> *static* *readonly*



### Info <code><span title="Represents type declarations for class types, interface types, array types, value types, enumeration types, type parameters, generic type definitions, and open or closed constructed generic types.">TypeInfo</span></code>



### IsArray <code><span title="Represents a Boolean (&lt;see langword=&quot;true&quot; /&gt; or &lt;see langword=&quot;false&quot; /&gt;) value.">Boolean</span></code> *static* *readonly*

Denotes if this type is actually an array type.

### IsByRef <code><span title="Represents a Boolean (&lt;see langword=&quot;true&quot; /&gt; or &lt;see langword=&quot;false&quot; /&gt;) value.">Boolean</span></code> *static* *readonly*

Denotes if this type is a by ref type.

### IsClass <code><span title="Represents a Boolean (&lt;see langword=&quot;true&quot; /&gt; or &lt;see langword=&quot;false&quot; /&gt;) value.">Boolean</span></code> *static* *readonly*



### IsConstructedGenericType <code><span title="Represents a Boolean (&lt;see langword=&quot;true&quot; /&gt; or &lt;see langword=&quot;false&quot; /&gt;) value.">Boolean</span></code> *static* *readonly*

Denotes if this type is constructed from a generic type.

### IsDefinedInLocalProject <code><span title="Represents a Boolean (&lt;see langword=&quot;true&quot; /&gt; or &lt;see langword=&quot;false&quot; /&gt;) value.">Boolean</span></code>

Denotes whether this type was defined inside a local project.

### IsDelegate <code><span title="Represents a Boolean (&lt;see langword=&quot;true&quot; /&gt; or &lt;see langword=&quot;false&quot; /&gt;) value.">Boolean</span></code> *static* *readonly*



### IsEnum <code><span title="Represents a Boolean (&lt;see langword=&quot;true&quot; /&gt; or &lt;see langword=&quot;false&quot; /&gt;) value.">Boolean</span></code> *static* *readonly*



### IsGenericParameter <code><span title="Represents a Boolean (&lt;see langword=&quot;true&quot; /&gt; or &lt;see langword=&quot;false&quot; /&gt;) value.">Boolean</span></code> *static* *readonly*

Indicates if this type is used as a generic parameter in a type definition or in a generic method definition.

### IsGenericType <code><span title="Represents a Boolean (&lt;see langword=&quot;true&quot; /&gt; or &lt;see langword=&quot;false&quot; /&gt;) value.">Boolean</span></code> *static* *readonly*

Denotes if this type is generic, meaning can be a generic type definition, open constructed type or closed constructed type.

### IsGenericTypeDefinition <code><span title="Represents a Boolean (&lt;see langword=&quot;true&quot; /&gt; or &lt;see langword=&quot;false&quot; /&gt;) value.">Boolean</span></code> *static* *readonly*

Denotes that this type defines a generic type and can be used to create constructed types.

### IsInterface <code><span title="Represents a Boolean (&lt;see langword=&quot;true&quot; /&gt; or &lt;see langword=&quot;false&quot; /&gt;) value.">Boolean</span></code> *static* *readonly*



### IsValueType <code><span title="Represents a Boolean (&lt;see langword=&quot;true&quot; /&gt; or &lt;see langword=&quot;false&quot; /&gt;) value.">Boolean</span></code> *static* *readonly*



### MetadataToken <code><span title="Represents a 32-bit signed integer.">Int32</span></code> *static* *readonly*



### Methods <code><span title="">MethodModel[]</span></code> *static* *readonly*



### Name <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code> *static* *virtual* *readonly*



### Namespace <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code> *static* *readonly*



### Properties <code><span title="">PropertyModel[]</span></code> *static* *readonly*



### TreatAsFacade <code><span title="Represents a Boolean (&lt;see langword=&quot;true&quot; /&gt; or &lt;see langword=&quot;false&quot; /&gt;) value.">Boolean</span></code> *static* *readonly*

Denotes whether this type should be treated as a facade. Facade in this context means
to avoid retaining extra information and only keeping essentials like the type definition itself.



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