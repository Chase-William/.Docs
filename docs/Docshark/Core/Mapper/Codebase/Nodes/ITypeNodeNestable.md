# ITypeNodeNestable check renderTypeName #1

Represents a type that can contain other type definitions internally.
For example, this can represent a class or struct as both can contain other class/struct type definitions.

## `public` Properties

### Types check renderTypeName #2 `abstract`

Contains the types defined within the implementing type.



## `public` Methods

### AddType `abstract`

Adds a given type with it's member info.

- *@param* fullName check renderTypeName #2
- *@param* member check renderTypeName #2

- *@returns* System.Void

### FindEvent `abstract`

Finds a given event within a type.

- *@param* segments check renderTypeName #2

- *@returns* Docshark.Core.Models.Codebase.Model`2[System.Reflection.EventInfo,LoxSmoke.DocXml.CommonComments]

### FindField `abstract`

Finds a given field within a type.

- *@param* segments check renderTypeName #2

- *@returns* Docshark.Core.Models.Codebase.Model`2[System.Reflection.FieldInfo,LoxSmoke.DocXml.CommonComments]

### FindProperty `abstract`

Finds a given property within a type.

- *@param* segments check renderTypeName #2

- *@returns* Docshark.Core.Models.Codebase.Model`2[System.Reflection.PropertyInfo,LoxSmoke.DocXml.CommonComments]

### FindType `abstract`

Finds the given type.

- *@param* segments check renderTypeName #2

- *@returns* Docshark.Core.Models.Codebase.Types.TypeMember`2[System.Reflection.TypeInfo,LoxSmoke.DocXml.TypeComments]