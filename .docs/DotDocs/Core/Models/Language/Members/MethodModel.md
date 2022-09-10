# <code><span title="">MethodModel</span></code> *class*

```
ட MemberModel<MethodInfo, MethodComments>
  ட Model
    ட Object
```



## *public* Properties

### Comments <code><span title="Method, operator and constructor comments">MethodComments</span></code>



### DeclaringType <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code> *static* *readonly*

The id of the delcaring type for this member. The declaring type is 
the type the member is defined in. For example, a custom class has a .Equals()
method, but until that custom class implements it's own. It will use the one defined
in it's parent that provides .Equals(). That same .Equals() will denote it's declaring type to
be that parent class as that parent is where it "resides".

### Info <code><span title="Discovers the attributes of a method and provides access to method metadata.">MethodInfo</span></code>



### IsAbstract <code><span title="Represents a Boolean (&lt;see langword=&quot;true&quot; /&gt; or &lt;see langword=&quot;false&quot; /&gt;) value.">Boolean</span></code> *static* *readonly*



### IsInternal <code><span title="Represents a Boolean (&lt;see langword=&quot;true&quot; /&gt; or &lt;see langword=&quot;false&quot; /&gt;) value.">Boolean</span></code> *static* *readonly*



### IsPrivate <code><span title="Represents a Boolean (&lt;see langword=&quot;true&quot; /&gt; or &lt;see langword=&quot;false&quot; /&gt;) value.">Boolean</span></code> *static* *readonly*



### IsProtected <code><span title="Represents a Boolean (&lt;see langword=&quot;true&quot; /&gt; or &lt;see langword=&quot;false&quot; /&gt;) value.">Boolean</span></code> *static* *readonly*



### IsPublic <code><span title="Represents a Boolean (&lt;see langword=&quot;true&quot; /&gt; or &lt;see langword=&quot;false&quot; /&gt;) value.">Boolean</span></code> *static* *readonly*



### IsStatic <code><span title="Represents a Boolean (&lt;see langword=&quot;true&quot; /&gt; or &lt;see langword=&quot;false&quot; /&gt;) value.">Boolean</span></code> *static* *readonly*



### IsVirtual <code><span title="Represents a Boolean (&lt;see langword=&quot;true&quot; /&gt; or &lt;see langword=&quot;false&quot; /&gt;) value.">Boolean</span></code> *static* *readonly*



### Name <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code> *static* *virtual* *readonly*



### Parameters <code><a href="..\Parameters\ParameterModel.md">ParameterModel</a>[]</code> *static* *virtual* *readonly*



### ReturnParameter <code><a href="..\Parameters\ParameterModel.md">ParameterModel</a></code> *static* *virtual* *readonly*





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