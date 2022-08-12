# TypeNodeNestable undefined

```
ட Docshark.Core.Mapper.Codebase.Nodes.TypeNode
  ட Docshark.Core.Mapper.Codebase.Nodes.Node
    ட System.Object
```

A type that can contain other types.

## `public` Properties

### Member <code title="comments go here"><Docshark.Core.Models.Codebase.Types.TypeMember`2[System.Reflection.TypeInfo,LoxSmoke.DocXml.TypeComments]></code> `static` `readonly`

Information about the type this <see cref="T:Docshark.Core.Mapper.Codebase.Nodes.TypeNode" /> represents.

### Parent <code><<a href="./Docshark\Core\Mapper\Codebase\Nodes\.md">Docshark.Core.Mapper.Codebase.Nodes.Node</a>></code> `static` `readonly`

The node this node branches off of.

### Types <code title="comments go here"><System.Collections.Generic.Dictionary`2[System.String,Docshark.Core.Mapper.Codebase.Nodes.TypeNode]></code> `virtual`

Nested types.



## `public` Methods

### AddType `virtual`

A recursive method for adding a type to another <see cref="T:Docshark.Core.Mapper.Codebase.Nodes.TypeNodeNestable" />.

- *@param* types `System.ArraySegment`1[System.String]`
- *@param* member `Docshark.Core.Models.Codebase.Types.TypeMember`2[System.Reflection.TypeInfo,LoxSmoke.DocXml.TypeComments]`

- *@returns* System.Void

### FindEvent `virtual`

Searches through this <see cref="P:Docshark.Core.Mapper.Codebase.Nodes.TypeNode.Member" /> as a <see cref="T:Docshark.Core.Models.Codebase.Types.IMemberContainable" /> to find the target event.

- *@param* types `System.ArraySegment`1[System.String]`

- *@returns* Docshark.Core.Models.Codebase.Model`2[System.Reflection.EventInfo,LoxSmoke.DocXml.CommonComments]

### FindField `virtual`

Searches through this <see cref="P:Docshark.Core.Mapper.Codebase.Nodes.TypeNode.Member" /> as a <see cref="T:Docshark.Core.Models.Codebase.IFieldable" /> to find the target field.

- *@param* types `System.ArraySegment`1[System.String]`

- *@returns* Docshark.Core.Models.Codebase.Model`2[System.Reflection.FieldInfo,LoxSmoke.DocXml.CommonComments]

### FindProperty `virtual`

Searches through this <see cref="P:Docshark.Core.Mapper.Codebase.Nodes.TypeNode.Member" /> as a <see cref="T:Docshark.Core.Models.Codebase.Types.IMemberContainable" /> to find the target property.

- *@param* types `System.ArraySegment`1[System.String]`

- *@returns* Docshark.Core.Models.Codebase.Model`2[System.Reflection.PropertyInfo,LoxSmoke.DocXml.CommonComments]

### FindType `virtual`

Searches through this <see cref="T:Docshark.Core.Mapper.Codebase.Nodes.TypeNodeNestable" /> and it's nested <see cref="P:Docshark.Core.Mapper.Codebase.Nodes.TypeNodeNestable.Types" />.

- *@param* types `System.ArraySegment`1[System.String]`

- *@returns* Docshark.Core.Models.Codebase.Types.TypeMember`2[System.Reflection.TypeInfo,LoxSmoke.DocXml.TypeComments]

### GetName `virtual`

Gets the short name of the current type.

- *@returns* System.String

### Save `virtual`

Iterate through <see cref="P:Docshark.Core.Mapper.Codebase.Nodes.TypeNodeNestable.Types" /> defined in this type and save them, along with
<see cref="T:Docshark.Core.Mapper.Codebase.Nodes.TypeNodeNestable" /> info.

- *@param* outputPath `System.String`
- *@param* namespaces `System.Collections.Generic.Stack`1[System.String]`
- *@param* nestables `System.Collections.Generic.Stack`1[System.String]`

- *@returns* System.Void

## `protected` Methods

### WriteInfo `virtual`

Writes all information regarding this type to file as JSON.

- *@param* outputPath `System.String`
- *@param* namespaces `System.Collections.Generic.Stack`1[System.String]`
- *@param* nestables `System.Collections.Generic.Stack`1[System.String]`

- *@returns* System.Void