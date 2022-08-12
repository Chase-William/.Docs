# IMemberContainable undefined

Represents a entity that can contain properties, fields, events, and methods.

## `public` Properties

### Events <code title="comments go here"><Docshark.Core.Models.Codebase.Members.EventModel[]></code> `abstract`

Events of this <see cref="T:Docshark.Core.Models.Codebase.Types.IMemberContainable" />.

### Methods <code title="comments go here"><Docshark.Core.Models.Codebase.Members.MethodModel[]></code> `abstract`

Methods of this <see cref="P:Docshark.Core.Models.Codebase.Types.IMemberContainable.Methods" />.

### Properties <code title="comments go here"><Docshark.Core.Models.Codebase.Members.PropertyModel[]></code> `abstract`

Properties of this <see cref="T:Docshark.Core.Models.Codebase.Types.IMemberContainable" />.



## `public` Methods

### GetEvents `virtual`

Gets all the desired events from the type info with documentation.

- *@param* info `System.Reflection.TypeInfo`
- *@param* reader `LoxSmoke.DocXml.DocXmlReader`

- *@returns* Docshark.Core.Models.Codebase.Members.EventModel[]

### GetMethods `virtual`

Gets all the desired methods from the type info with documentation.

- *@param* info `System.Reflection.TypeInfo`
- *@param* reader `LoxSmoke.DocXml.DocXmlReader`

- *@returns* Docshark.Core.Models.Codebase.Members.MethodModel[]

### GetProperties `virtual`

Gets all the desired properties from the type info with documentation.

- *@param* info `System.Reflection.TypeInfo`
- *@param* reader `LoxSmoke.DocXml.DocXmlReader`

- *@returns* Docshark.Core.Models.Codebase.Members.PropertyModel[]

### Init

Loads <see cref="T:Docshark.Core.Models.Codebase.Types.IMemberContainable" />'s properties, fields, events, and methods with members.

- *@param* constructable `Docshark.Core.Models.Codebase.Types.IMemberContainable`
- *@param* info `System.Reflection.TypeInfo`
- *@param* reader `LoxSmoke.DocXml.DocXmlReader`

- *@returns* System.Void

## `public` Fields

### DEFAULT_OBJ_METHODS <code title="comments go here"><System.String[]></code> `readonly`

Summary not provided.