# TypeNodeNestable `class`

```
ட TypeNode
  ட Node
    ட Object
```

A type that can contain other types.

## `public` Properties

### Member <code title="comments here">Docshark.Core.Models.Codebase.Types.TypeMember`2[System.Reflection.TypeInfo,LoxSmoke.DocXml.TypeComments]</code> `static` `readonly`

Information about the type this <see cref="T:Docshark.Core.Mapper.Codebase.Nodes.TypeNode" /> represents.

### Parent <code><<a href="./Node.md">Docshark.Core.Mapper.Codebase.Nodes.Node</a>></code> `static` `readonly`

The node this node branches off of.

### Types <code title="comments here">System.Collections.Generic.Dictionary`2[System.String,Docshark.Core.Mapper.Codebase.Nodes.TypeNode]</code> `virtual`

Nested types.



## `public` Methods

### AddType `virtual`

A recursive method for adding a type to another <see cref="T:Docshark.Core.Mapper.Codebase.Nodes.TypeNodeNestable" />.

- *@param* types <code title="comments here">System.ArraySegment`1[System.String]</code>
- *@param* member <code title="comments here">Docshark.Core.Models.Codebase.Types.TypeMember`2[System.Reflection.TypeInfo,LoxSmoke.DocXml.TypeComments]</code>

- *@returns* <code title="comments here">System.Void</code>

### FindEvent `virtual`

Searches through this <see cref="P:Docshark.Core.Mapper.Codebase.Nodes.TypeNode.Member" /> as a <see cref="T:Docshark.Core.Models.Codebase.Types.IMemberContainable" /> to find the target event.

- *@param* types <code title="comments here">System.ArraySegment`1[System.String]</code>

- *@returns* <code title="comments here">Docshark.Core.Models.Codebase.Model`2[System.Reflection.EventInfo,LoxSmoke.DocXml.CommonComments]</code>

### FindField `virtual`

Searches through this <see cref="P:Docshark.Core.Mapper.Codebase.Nodes.TypeNode.Member" /> as a <see cref="T:Docshark.Core.Models.Codebase.IFieldable" /> to find the target field.

- *@param* types <code title="comments here">System.ArraySegment`1[System.String]</code>

- *@returns* <code title="comments here">Docshark.Core.Models.Codebase.Model`2[System.Reflection.FieldInfo,LoxSmoke.DocXml.CommonComments]</code>

### FindProperty `virtual`

Searches through this <see cref="P:Docshark.Core.Mapper.Codebase.Nodes.TypeNode.Member" /> as a <see cref="T:Docshark.Core.Models.Codebase.Types.IMemberContainable" /> to find the target property.

- *@param* types <code title="comments here">System.ArraySegment`1[System.String]</code>

- *@returns* <code title="comments here">Docshark.Core.Models.Codebase.Model`2[System.Reflection.PropertyInfo,LoxSmoke.DocXml.CommonComments]</code>

### FindType `virtual`

Searches through this <see cref="T:Docshark.Core.Mapper.Codebase.Nodes.TypeNodeNestable" /> and it's nested <see cref="P:Docshark.Core.Mapper.Codebase.Nodes.TypeNodeNestable.Types" />.

- *@param* types <code title="comments here">System.ArraySegment`1[System.String]</code>

- *@returns* <code title="comments here">Docshark.Core.Models.Codebase.Types.TypeMember`2[System.Reflection.TypeInfo,LoxSmoke.DocXml.TypeComments]</code>

### GetName `virtual`

Gets the short name of the current type.

- *@returns* <code title="comments here">System.String</code>

### Save `virtual`

Iterate through <see cref="P:Docshark.Core.Mapper.Codebase.Nodes.TypeNodeNestable.Types" /> defined in this type and save them, along with
<see cref="T:Docshark.Core.Mapper.Codebase.Nodes.TypeNodeNestable" /> info.

- *@param* outputPath <code title="comments here">System.String</code>
- *@param* namespaces <code title="comments here">System.Collections.Generic.Stack`1[System.String]</code>
- *@param* nestables <code title="comments here">System.Collections.Generic.Stack`1[System.String]</code>

- *@returns* <code title="comments here">System.Void</code>

## `protected` Methods

### WriteInfo `virtual`

Writes all information regarding this type to file as JSON.

- *@param* outputPath <code title="comments here">System.String</code>
- *@param* namespaces <code title="comments here">System.Collections.Generic.Stack`1[System.String]</code>
- *@param* nestables <code title="comments here">System.Collections.Generic.Stack`1[System.String]</code>

- *@returns* <code title="comments here">System.Void</code>