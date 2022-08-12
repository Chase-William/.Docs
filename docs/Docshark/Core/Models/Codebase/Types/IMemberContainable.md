# IMemberContainable `interface`

Represents a entity that can contain properties, fields, events, and methods.

## `public` Properties

### Events <code title="comments here">Docshark.Core.Models.Codebase.Members.EventModel[]</code> `abstract`

Events of this <see cref="T:Docshark.Core.Models.Codebase.Types.IMemberContainable" />.

### Methods <code title="comments here">Docshark.Core.Models.Codebase.Members.MethodModel[]</code> `abstract`

Methods of this <see cref="P:Docshark.Core.Models.Codebase.Types.IMemberContainable.Methods" />.

### Properties <code title="comments here">Docshark.Core.Models.Codebase.Members.PropertyModel[]</code> `abstract`

Properties of this <see cref="T:Docshark.Core.Models.Codebase.Types.IMemberContainable" />.



## `public` Methods

### GetEvents `virtual`

Gets all the desired events from the type info with documentation.

- *@param* info <code title="comments here">System.Reflection.TypeInfo</code>
- *@param* reader <code title="comments here">LoxSmoke.DocXml.DocXmlReader</code>

- *@returns* <code title="comments here">Docshark.Core.Models.Codebase.Members.EventModel[]</code>

### GetMethods `virtual`

Gets all the desired methods from the type info with documentation.

- *@param* info <code title="comments here">System.Reflection.TypeInfo</code>
- *@param* reader <code title="comments here">LoxSmoke.DocXml.DocXmlReader</code>

- *@returns* <code title="comments here">Docshark.Core.Models.Codebase.Members.MethodModel[]</code>

### GetProperties `virtual`

Gets all the desired properties from the type info with documentation.

- *@param* info <code title="comments here">System.Reflection.TypeInfo</code>
- *@param* reader <code title="comments here">LoxSmoke.DocXml.DocXmlReader</code>

- *@returns* <code title="comments here">Docshark.Core.Models.Codebase.Members.PropertyModel[]</code>

### Init

Loads <see cref="T:Docshark.Core.Models.Codebase.Types.IMemberContainable" />'s properties, fields, events, and methods with members.

- *@param* constructable <code><<a href="./IMemberContainable.md">Docshark.Core.Models.Codebase.Types.IMemberContainable</a>></code>
- *@param* info <code title="comments here">System.Reflection.TypeInfo</code>
- *@param* reader <code title="comments here">LoxSmoke.DocXml.DocXmlReader</code>

- *@returns* <code title="comments here">System.Void</code>

## `public` Fields

### DEFAULT_OBJ_METHODS <code title="comments here">System.String[]</code> `readonly`

Summary not provided.