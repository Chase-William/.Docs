# NamespaceNode check renderTypeName #1

```
ட Docshark.Core.Mapper.Codebase.Nodes.Node
  ட System.Object
```

Represents a namespace as a node.

## `public` Properties

### Namespaces check renderTypeName #2

Contains all the namespaces containe within this <see cref="T:Docshark.Core.Mapper.Codebase.Nodes.NamespaceNode" />.

### Parent <code><<a href="./Node.md">Docshark.Core.Mapper.Codebase.Nodes.Node</a>></code> `static` `readonly`

The node this node branches off of.

### Types check renderTypeName #2 `virtual`

Contains all the types within this <see cref="T:Docshark.Core.Mapper.Codebase.Nodes.NamespaceNode" />.



## `public` Methods

### AddType `virtual`

Summary not provided.

- *@param* segments `check renderTypeName #2`
- *@param* member `check renderTypeName #2`

- *@returns* System.Void

### FindEvent `virtual`

Searches for an event that branches off this <see cref="T:Docshark.Core.Mapper.Codebase.Nodes.NamespaceNode" />.

- *@param* segments `check renderTypeName #2`

- *@returns* Docshark.Core.Models.Codebase.Model`2[System.Reflection.EventInfo,LoxSmoke.DocXml.CommonComments]

### FindField `virtual`

Searches for a field that branches off this <see cref="T:Docshark.Core.Mapper.Codebase.Nodes.NamespaceNode" />.

- *@param* segments `check renderTypeName #2`

- *@returns* Docshark.Core.Models.Codebase.Model`2[System.Reflection.FieldInfo,LoxSmoke.DocXml.CommonComments]

### FindProperty `virtual`

Searches for a property that branches of this <see cref="T:Docshark.Core.Mapper.Codebase.Nodes.NamespaceNode" />.

- *@param* segments `check renderTypeName #2`

- *@returns* Docshark.Core.Models.Codebase.Model`2[System.Reflection.PropertyInfo,LoxSmoke.DocXml.CommonComments]

### FindType `virtual`

Searches for a type that branches of this <see cref="T:Docshark.Core.Mapper.Codebase.Nodes.NamespaceNode" />.

- *@param* segments `check renderTypeName #2`

- *@returns* Docshark.Core.Models.Codebase.Types.TypeMember`2[System.Reflection.TypeInfo,LoxSmoke.DocXml.TypeComments]

### GetName `virtual`

Gets the namespace name.

- *@returns* System.String

### Save `virtual`

Summary not provided.

- *@param* outputPath `check renderTypeName #2`
- *@param* namespaces `check renderTypeName #2`
- *@param* nestables `check renderTypeName #2`

- *@returns* System.Void