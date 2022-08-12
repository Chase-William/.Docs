# IFieldable `interface`

Represents a type that can contain fields.
This was added for the single purpose of making enumerations work as
they are actually a class with their values as fields behind the scenes.

## `public` Properties

### Fields <code title="comments here">Docshark.Core.Models.Codebase.Members.FieldModel[]</code> `abstract`

Fields of this type.



## `public` Methods

### GetFields `virtual`

Gets all the desired fields from the type info with documentation.

- *@param* info <code title="comments here">System.Reflection.TypeInfo</code>
- *@param* reader <code title="comments here">LoxSmoke.DocXml.DocXmlReader</code>

- *@returns* <code title="comments here">Docshark.Core.Models.Codebase.Members.FieldModel[]</code>