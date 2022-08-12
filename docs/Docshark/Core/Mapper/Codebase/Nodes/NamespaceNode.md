# NamespaceNode undefined

```
ட Docshark.Core.Mapper.Codebase.Nodes.Node
  ட System.Object
```

Represents a namespace as a node.

## `public` Properties

### Namespaces <code title="comments go here"><System.Collections.Generic.Dictionary`2[System.String,Docshark.Core.Mapper.Codebase.Nodes.NamespaceNode]></code>

Contains all the namespaces containe within this <see cref="T:Docshark.Core.Mapper.Codebase.Nodes.NamespaceNode" />.

### Parent <code><<a href="./Docshark\Core\Mapper\Codebase\Nodes.md">Docshark.Core.Mapper.Codebase.Nodes.Node</a>></code> `static` `readonly`

The node this node branches off of.

### Types <code title="comments go here"><System.Collections.Generic.Dictionary`2[System.String,Docshark.Core.Mapper.Codebase.Nodes.TypeNode]></code> `virtual`

Contains all the types within this <see cref="T:Docshark.Core.Mapper.Codebase.Nodes.NamespaceNode" />.



## `public` Methods

### AddType `virtual`

Summary not provided.

- *@param* segments `System.ArraySegment`1[System.String]`
- *@param* member `Docshark.Core.Models.Codebase.Types.TypeMember`2[System.Reflection.TypeInfo,LoxSmoke.DocXml.TypeComments]`

- *@returns* System.Void

### FindEvent `virtual`

Searches for an event that branches off this <see cref="T:Docshark.Core.Mapper.Codebase.Nodes.NamespaceNode" />.

- *@param* segments `System.ArraySegment`1[System.String]`

- *@returns* Docshark.Core.Models.Codebase.Model`2[System.Reflection.EventInfo,LoxSmoke.DocXml.CommonComments]

### FindField `virtual`

Searches for a field that branches off this <see cref="T:Docshark.Core.Mapper.Codebase.Nodes.NamespaceNode" />.

- *@param* segments `System.ArraySegment`1[System.String]`

- *@returns* Docshark.Core.Models.Codebase.Model`2[System.Reflection.FieldInfo,LoxSmoke.DocXml.CommonComments]

### FindProperty `virtual`

Searches for a property that branches of this <see cref="T:Docshark.Core.Mapper.Codebase.Nodes.NamespaceNode" />.

- *@param* segments `System.ArraySegment`1[System.String]`

- *@returns* Docshark.Core.Models.Codebase.Model`2[System.Reflection.PropertyInfo,LoxSmoke.DocXml.CommonComments]

### FindType `virtual`

Searches for a type that branches of this <see cref="T:Docshark.Core.Mapper.Codebase.Nodes.NamespaceNode" />.

- *@param* segments `System.ArraySegment`1[System.String]`

- *@returns* Docshark.Core.Models.Codebase.Types.TypeMember`2[System.Reflection.TypeInfo,LoxSmoke.DocXml.TypeComments]

### GetName `virtual`

Gets the namespace name.

- *@returns* System.String

### Save `virtual`

Summary not provided.

- *@param* outputPath `System.String`
- *@param* namespaces `System.Collections.Generic.Stack`1[System.String]`
- *@param* nestables `System.Collections.Generic.Stack`1[System.String]`

- *@returns* System.Void