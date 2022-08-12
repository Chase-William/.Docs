# InterfaceModel `class`

```
ட TypeMember<TypeInfo, TypeComments>
  ட Model<TypeInfo, TypeComments>
    ட Object
```

Represents an interface.

## `public` Properties

### CanHaveInternalTypes <code title="comments here">System.Boolean</code> `static` `virtual` `readonly`

Denotes if this type can have internal types.

### Comments <code title="comments here">LoxSmoke.DocXml.TypeComments</code>

Written documentation about the <see cref="P:Docshark.Core.Models.Codebase.Model`2.Meta" />.

### Events <code title="comments here">Docshark.Core.Models.Codebase.Members.EventModel[]</code> `virtual`

Events of this interface.

### Fields <code title="comments here">Docshark.Core.Models.Codebase.Members.FieldModel[]</code> `virtual`

Fields of this interface.

### FullName <code title="comments here">System.String</code> `static` `readonly`

Gets the namespace with the name of this type.

### IsInternal <code title="comments here">System.Boolean</code> `static` `virtual` `readonly`

Denotes if this type is internal.

### IsPrivate <code title="comments here">System.Boolean</code> `static` `virtual` `readonly`

Denotes if this type is private.

### IsProtected <code title="comments here">System.Boolean</code> `static` `virtual` `readonly`

Denotes if this type is protected.

### IsPublic <code title="comments here">System.Boolean</code> `static` `virtual` `readonly`

Denotes if this type is public.

### Meta <code title="comments here">System.Reflection.TypeInfo</code> `static` `readonly`

Metadata attained using the MetadataContextLoader.

### Methods <code title="comments here">Docshark.Core.Models.Codebase.Members.MethodModel[]</code> `virtual`

Methods of this interface.

### Name <code title="comments here">System.String</code> `static` `readonly`

Returns the name of the type or member.

### Namespace <code title="comments here">System.String</code> `static` `readonly`

Gets the namespace of this type.

### Parent <code title="comments here">System.String</code> `static` `readonly`

Gets the parent of this type.

### Properties <code title="comments here">Docshark.Core.Models.Codebase.Members.PropertyModel[]</code> `virtual`

Properties of this interface.

### Type <code title="comments here">System.String</code> `static` `virtual` `readonly`

Identifier for determining the type used in json parsers. 



## `public` Fields

### INTERFACE_TYPE_STRING <code title="comments here">System.String</code> `const`

Summary not provided.