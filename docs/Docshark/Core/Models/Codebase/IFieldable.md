# IFieldable check renderTypeName #1

Represents a type that can contain fields.
This was added for the single purpose of making enumerations work as
they are actually a class with their values as fields behind the scenes.

## `public` Properties

### Fields check renderTypeName #2 `abstract`

Fields of this type.



## `public` Methods

### GetFields `virtual`

Gets all the desired fields from the type info with documentation.

- *@param* info check renderTypeName #2
- *@param* reader check renderTypeName #2

- *@returns* Docshark.Core.Models.Codebase.Members.FieldModel[]