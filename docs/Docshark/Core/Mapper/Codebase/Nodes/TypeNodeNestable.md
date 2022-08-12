# TypeNodeNestable check renderTypeName #1

```
ட Docshark.Core.Mapper.Codebase.Nodes.TypeNode
  ட Docshark.Core.Mapper.Codebase.Nodes.Node
    ட System.Object
```

A type that can contain other types.

## `public` Properties

### Member check renderTypeName #2 `static` `readonly`

Information about the type this <see cref="T:Docshark.Core.Mapper.Codebase.Nodes.TypeNode" /> represents.

### Parent <code><<a href="./Node.md">Docshark.Core.Mapper.Codebase.Nodes.Node</a>></code> `static` `readonly`

The node this node branches off of.

### Types check renderTypeName #2 `virtual`

Nested types.



## `public` Methods

### AddType `virtual`

A recursive method for adding a type to another <see cref="T:Docshark.Core.Mapper.Codebase.Nodes.TypeNodeNestable" />.

- *@param* types `check renderTypeName #2`
- *@param* member `check renderTypeName #2`

- *@returns* System.Void

### FindEvent `virtual`

Searches through this <see cref="P:Docshark.Core.Mapper.Codebase.Nodes.TypeNode.Member" /> as a <see cref="T:Docshark.Core.Models.Codebase.Types.IMemberContainable" /> to find the target event.

- *@param* types `check renderTypeName #2`

- *@returns* Docshark.Core.Models.Codebase.Model`2[System.Reflection.EventInfo,LoxSmoke.DocXml.CommonComments]

### FindField `virtual`

Searches through this <see cref="P:Docshark.Core.Mapper.Codebase.Nodes.TypeNode.Member" /> as a <see cref="T:Docshark.Core.Models.Codebase.IFieldable" /> to find the target field.

- *@param* types `check renderTypeName #2`

- *@returns* Docshark.Core.Models.Codebase.Model`2[System.Reflection.FieldInfo,LoxSmoke.DocXml.CommonComments]

### FindProperty `virtual`

Searches through this <see cref="P:Docshark.Core.Mapper.Codebase.Nodes.TypeNode.Member" /> as a <see cref="T:Docshark.Core.Models.Codebase.Types.IMemberContainable" /> to find the target property.

- *@param* types `check renderTypeName #2`

- *@returns* Docshark.Core.Models.Codebase.Model`2[System.Reflection.PropertyInfo,LoxSmoke.DocXml.CommonComments]

### FindType `virtual`

Searches through this <see cref="T:Docshark.Core.Mapper.Codebase.Nodes.TypeNodeNestable" /> and it's nested <see cref="P:Docshark.Core.Mapper.Codebase.Nodes.TypeNodeNestable.Types" />.

- *@param* types `check renderTypeName #2`

- *@returns* Docshark.Core.Models.Codebase.Types.TypeMember`2[System.Reflection.TypeInfo,LoxSmoke.DocXml.TypeComments]

### GetName `virtual`

Gets the short name of the current type.

- *@returns* System.String

### Save `virtual`

Iterate through <see cref="P:Docshark.Core.Mapper.Codebase.Nodes.TypeNodeNestable.Types" /> defined in this type and save them, along with
<see cref="T:Docshark.Core.Mapper.Codebase.Nodes.TypeNodeNestable" /> info.

- *@param* outputPath `check renderTypeName #2`
- *@param* namespaces `check renderTypeName #2`
- *@param* nestables `check renderTypeName #2`

- *@returns* System.Void

## `protected` Methods

### WriteInfo `virtual`

Writes all information regarding this type to file as JSON.

- *@param* outputPath `check renderTypeName #2`
- *@param* namespaces `check renderTypeName #2`
- *@param* nestables `check renderTypeName #2`

- *@returns* System.Void