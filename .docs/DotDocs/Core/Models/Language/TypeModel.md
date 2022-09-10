# <code><span title="Represents a &lt;see cref=&quot;T:System.Type&quot; /&gt; as a serializeable model.">TypeModel</span></code> *class*

```
ட Model
  ட Object
```

Represents a <see cref="T:System.Type" /> as a serializeable model.

## *public* Properties:

### Assembly <code>[AssemblyModel](..\AssemblyModel.md)</code>

A reference to the assembly instance this type resides in.

### AssemblyId <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code> *static* *readonly*

A unique identifier for this assembly that is basically a foreign key to it's containing assembly.

### BaseType <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code> *static* *readonly*

A unique identifier to the base type which is basically like a foreign key.

### Comments <code><span title="Class, Struct or  delegate comments">TypeComments</span></code>

Contains the developer documentation associated with this type if it is provided.

### ElementTypeId <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code> *static* *readonly*

Denotes the element type that supports the current type

### Events <code>[EventModel](Members\EventModel.md)[]</code> *static* *readonly*



### Fields <code>[FieldModel](Members\FieldModel.md)[]</code> *static* *readonly*



### FullName <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code> *static* *readonly*



### GenericTypeArguments <code><span title="Represents text as a sequence of UTF-16 code units.">String[]</span></code> *static* *readonly*

Contains the primary keys to each type's definition.

### GenericTypeParameters <code><span title="Represents text as a sequence of UTF-16 code units.">String[]</span></code> *static* *readonly*

Contains the primary keys to each type's definition.

### Id <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code> *static* *readonly*

A unique identifier for this type that is basically a primary key.

### Info <code><span title="Represents type declarations for class types, interface types, array types, value types, enumeration types, type parameters, generic type definitions, and open or closed constructed generic types.">TypeInfo</span></code>

A reference to the actual <see cref="T:System.Type" /> instance for this <see cref="T:DotDocs.Core.Models.Language.TypeModel" />.

### InterfaceIds <code><span title="Represents text as a sequence of UTF-16 code units.">String[]</span></code> *static* *readonly*

A collection of foreign keys to implemented interfaces in this type.

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



### Methods <code>[MethodModel](Members\MethodModel.md)[]</code> *static* *readonly*



### Name <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code> *static* *virtual* *readonly*



### Namespace <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code> *static* *readonly*



### Properties <code>[PropertyModel](Members\PropertyModel.md)[]</code> *static* *readonly*



### TreatAsFacade <code><span title="Represents a Boolean (&lt;see langword=&quot;true&quot; /&gt; or &lt;see langword=&quot;false&quot; /&gt;) value.">Boolean</span></code> *static* *readonly*

Denotes whether this type should be treated as a facade. Facade in this context means
to avoid retaining extra information and only keeping essentials like the type definition itself.

