# <code><span title="">PropertyModel</span></code> *class*

```
ட MemberModel<PropertyInfo, CommonComments>
  ட Model
    ட Object
```



## *public* Properties

### Comments <code><span title="Base class for comments classes">CommonComments</span></code>



### DeclaringType <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code> *static* *readonly*

The id of the delcaring type for this member. The declaring type is 
the type the member is defined in. For example, a custom class has a .Equals()
method, but until that custom class implements it's own. It will use the one defined
in it's parent that provides .Equals(). That same .Equals() will denote it's declaring type to
be that parent class as that parent is where it "resides".

### HasGetter <code><span title="Represents a Boolean (&lt;see langword=&quot;true&quot; /&gt; or &lt;see langword=&quot;false&quot; /&gt;) value.">Boolean</span></code> *static* *readonly*



### HasSetter <code><span title="Represents a Boolean (&lt;see langword=&quot;true&quot; /&gt; or &lt;see langword=&quot;false&quot; /&gt;) value.">Boolean</span></code> *static* *readonly*



### Info <code><span title="Discovers the attributes of a property and provides access to property metadata.">PropertyInfo</span></code>



### IsAbstract <code><span title="Represents a Boolean (&lt;see langword=&quot;true&quot; /&gt; or &lt;see langword=&quot;false&quot; /&gt;) value.">Boolean</span></code> *static* *readonly*

Determines if the propert is abstract if either of it's methods are abstract themselves.

### IsGetInternal <code><span title="">Nullable</span><<span title="Represents a Boolean (<see langword="true" /> or <see langword="false" />) value.">Boolean</span>></code> *static* *readonly*



### IsGetPrivate <code><span title="">Nullable</span><<span title="Represents a Boolean (<see langword="true" /> or <see langword="false" />) value.">Boolean</span>></code> *static* *readonly*



### IsGetProtected <code><span title="">Nullable</span><<span title="Represents a Boolean (<see langword="true" /> or <see langword="false" />) value.">Boolean</span>></code> *static* *readonly*



### IsGetPublic <code><span title="">Nullable</span><<span title="Represents a Boolean (<see langword="true" /> or <see langword="false" />) value.">Boolean</span>></code> *static* *readonly*



### IsInternal <code><span title="Represents a Boolean (&lt;see langword=&quot;true&quot; /&gt; or &lt;see langword=&quot;false&quot; /&gt;) value.">Boolean</span></code> *static* *readonly*

Determines if the property is internal as a whole. This means both the set and get methods are internal if present.

### IsPrivate <code><span title="Represents a Boolean (&lt;see langword=&quot;true&quot; /&gt; or &lt;see langword=&quot;false&quot; /&gt;) value.">Boolean</span></code> *static* *readonly*



### IsProtected <code><span title="Represents a Boolean (&lt;see langword=&quot;true&quot; /&gt; or &lt;see langword=&quot;false&quot; /&gt;) value.">Boolean</span></code> *static* *readonly*

Determines if the property is protected as a whole. This means both the set and get methods are protected if present.

### IsPublic <code><span title="Represents a Boolean (&lt;see langword=&quot;true&quot; /&gt; or &lt;see langword=&quot;false&quot; /&gt;) value.">Boolean</span></code> *static* *readonly*

Determines if the property is publicly accessible to any degree.

### IsSetInternal <code><span title="">Nullable</span><<span title="Represents a Boolean (<see langword="true" /> or <see langword="false" />) value.">Boolean</span>></code> *static* *readonly*



### IsSetPrivate <code><span title="">Nullable</span><<span title="Represents a Boolean (<see langword="true" /> or <see langword="false" />) value.">Boolean</span>></code> *static* *readonly*



### IsSetProtected <code><span title="">Nullable</span><<span title="Represents a Boolean (<see langword="true" /> or <see langword="false" />) value.">Boolean</span>></code> *static* *readonly*



### IsSetPublic <code><span title="">Nullable</span><<span title="Represents a Boolean (<see langword="true" /> or <see langword="false" />) value.">Boolean</span>></code> *static* *readonly*



### IsStatic <code><span title="Represents a Boolean (&lt;see langword=&quot;true&quot; /&gt; or &lt;see langword=&quot;false&quot; /&gt;) value.">Boolean</span></code> *static* *readonly*

Determines if the property is static if either of it's methods are static themselves.

### IsVirtual <code><span title="Represents a Boolean (&lt;see langword=&quot;true&quot; /&gt; or &lt;see langword=&quot;false&quot; /&gt;) value.">Boolean</span></code> *static* *readonly*

Determines if the property is virtual if either of it's methods are virtual themselves.

### Name <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code> *static* *virtual* *readonly*



### Type <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code> *static* *readonly*





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