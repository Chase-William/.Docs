# NamespaceNode check renderTypeName

```
ட Docshark.Core.Mapper.Codebase.Nodes.Node
  ட System.Object
```

Represents a namespace as a node.

## `public` Properties

### Namespaces <code title="comments here">System.Collections.Generic.Dictionary`2[System.String,Docshark.Core.Mapper.Codebase.Nodes.NamespaceNode]</code>

Contains all the namespaces containe within this <see cref="T:Docshark.Core.Mapper.Codebase.Nodes.NamespaceNode" />.

### Parent <code><<a href="./Node.md">Docshark.Core.Mapper.Codebase.Nodes.Node</a>></code> `static` `readonly`

The node this node branches off of.

### Types <code title="comments here">System.Collections.Generic.Dictionary`2[System.String,Docshark.Core.Mapper.Codebase.Nodes.TypeNode]</code> `virtual`

Contains all the types within this <see cref="T:Docshark.Core.Mapper.Codebase.Nodes.NamespaceNode" />.



## `public` Methods

### AddType `virtual`

Summary not provided.

- *@param* segments <code title="comments here">System.ArraySegment`1[System.String]</code>
- *@param* member <code title="comments here">Docshark.Core.Models.Codebase.Types.TypeMember`2[System.Reflection.TypeInfo,LoxSmoke.DocXml.TypeComments]</code>

- *@returns* <code title="comments here">System.Void</code>

### FindEvent `virtual`

Searches for an event that branches off this <see cref="T:Docshark.Core.Mapper.Codebase.Nodes.NamespaceNode" />.

- *@param* segments <code title="comments here">System.ArraySegment`1[System.String]</code>

- *@returns* <code title="comments here">Docshark.Core.Models.Codebase.Model`2[System.Reflection.EventInfo,LoxSmoke.DocXml.CommonComments]</code>

### FindField `virtual`

Searches for a field that branches off this <see cref="T:Docshark.Core.Mapper.Codebase.Nodes.NamespaceNode" />.

- *@param* segments <code title="comments here">System.ArraySegment`1[System.String]</code>

- *@returns* <code title="comments here">Docshark.Core.Models.Codebase.Model`2[System.Reflection.FieldInfo,LoxSmoke.DocXml.CommonComments]</code>

### FindProperty `virtual`

Searches for a property that branches of this <see cref="T:Docshark.Core.Mapper.Codebase.Nodes.NamespaceNode" />.

- *@param* segments <code title="comments here">System.ArraySegment`1[System.String]</code>

- *@returns* <code title="comments here">Docshark.Core.Models.Codebase.Model`2[System.Reflection.PropertyInfo,LoxSmoke.DocXml.CommonComments]</code>

### FindType `virtual`

Searches for a type that branches of this <see cref="T:Docshark.Core.Mapper.Codebase.Nodes.NamespaceNode" />.

- *@param* segments <code title="comments here">System.ArraySegment`1[System.String]</code>

- *@returns* <code title="comments here">Docshark.Core.Models.Codebase.Types.TypeMember`2[System.Reflection.TypeInfo,LoxSmoke.DocXml.TypeComments]</code>

### GetName `virtual`

Gets the namespace name.

- *@returns* <code title="comments here">System.String</code>

### Save `virtual`

Summary not provided.

- *@param* outputPath <code title="comments here">System.String</code>
- *@param* namespaces <code title="comments here">System.Collections.Generic.Stack`1[System.String]</code>
- *@param* nestables <code title="comments here">System.Collections.Generic.Stack`1[System.String]</code>

- *@returns* <code title="comments here">System.Void</code>