# <code><span title="undefined">FieldModel</span></code> *class*

```
ட MemberModel<FieldInfo, CommonComments>
  ட Model
    ட Object
```



## *public* Properties

### Comments <code><span title="undefined">CommonComments</span></code>



### DeclaringType <code><span title="undefined">String</span></code> *static* *readonly*

The id of the delcaring type for this member. The declaring type is 
the type the member is defined in. For example, a custom class has a .Equals()
method, but until that custom class implements it's own. It will use the one defined
in it's parent that provides .Equals(). That same .Equals() will denote it's declaring type to
be that parent class as that parent is where it "resides".

### Info <code><span title="undefined">FieldInfo</span></code>



### IsInternal <code><span title="undefined">Boolean</span></code> *static* *readonly*



### IsLiteral <code><span title="undefined">Boolean</span></code> *static* *readonly*



### IsPrivate <code><span title="undefined">Boolean</span></code> *static* *readonly*



### IsProtected <code><span title="undefined">Boolean</span></code> *static* *readonly*



### IsPublic <code><span title="undefined">Boolean</span></code> *static* *readonly*



### IsReadonly <code><span title="undefined">Boolean</span></code> *static* *readonly*



### IsStatic <code><span title="undefined">Boolean</span></code> *static* *readonly*



### Name <code><span title="undefined">String</span></code> *static* *virtual* *readonly*



### RawConstantValue <code><span title="undefined">Object</span></code> *static* *readonly*



### Type <code><span title="undefined">String</span></code>





## *public* Methods

### Equals(...) *virtual*



- *@param* obj <code><span title="undefined">Object</span></code>

- *@returns* <code><span title="undefined">Boolean</span></code>

### GetHashCode(...) *virtual*



- *@returns* <code><span title="undefined">Int32</span></code>

### GetType(...)



- *@returns* <code><span title="undefined">Type</span></code>

### ToString(...) *virtual*



- *@returns* <code><span title="undefined">String</span></code>

## *protected* Methods

### Finalize(...) *virtual*





### MemberwiseClone(...)



- *@returns* <code><span title="undefined">Object</span></code>