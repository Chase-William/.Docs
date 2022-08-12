# ITypeNodeNestable check renderTypeName

Represents a type that can contain other type definitions internally.
For example, this can represent a class or struct as both can contain other class/struct type definitions.

## `public` Properties

### Types <code title="comments here">System.Collections.Generic.Dictionary`2[System.String,Docshark.Core.Mapper.Codebase.Nodes.TypeNode]</code> `abstract`

Contains the types defined within the implementing type.



## `public` Methods

### AddType `abstract`

Adds a given type with it's member info.

- *@param* fullName <code title="comments here">System.ArraySegment`1[System.String]</code>
- *@param* member <code title="comments here">Docshark.Core.Models.Codebase.Types.TypeMember`2[System.Reflection.TypeInfo,LoxSmoke.DocXml.TypeComments]</code>

- *@returns* <code title="comments here">System.Void</code>

### FindEvent `abstract`

Finds a given event within a type.

- *@param* segments <code title="comments here">System.ArraySegment`1[System.String]</code>

- *@returns* <code title="comments here">Docshark.Core.Models.Codebase.Model`2[System.Reflection.EventInfo,LoxSmoke.DocXml.CommonComments]</code>

### FindField `abstract`

Finds a given field within a type.

- *@param* segments <code title="comments here">System.ArraySegment`1[System.String]</code>

- *@returns* <code title="comments here">Docshark.Core.Models.Codebase.Model`2[System.Reflection.FieldInfo,LoxSmoke.DocXml.CommonComments]</code>

### FindProperty `abstract`

Finds a given property within a type.

- *@param* segments <code title="comments here">System.ArraySegment`1[System.String]</code>

- *@returns* <code title="comments here">Docshark.Core.Models.Codebase.Model`2[System.Reflection.PropertyInfo,LoxSmoke.DocXml.CommonComments]</code>

### FindType `abstract`

Finds the given type.

- *@param* segments <code title="comments here">System.ArraySegment`1[System.String]</code>

- *@returns* <code title="comments here">Docshark.Core.Models.Codebase.Types.TypeMember`2[System.Reflection.TypeInfo,LoxSmoke.DocXml.TypeComments]</code>