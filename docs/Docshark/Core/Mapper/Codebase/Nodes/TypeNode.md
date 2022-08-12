# TypeNode `class`

```
ட Node
  ட Object
```

A class that represents a defined type.

## `public` Properties

### Member <code title="comments here">Docshark.Core.Models.Codebase.Types.TypeMember`2[System.Reflection.TypeInfo,LoxSmoke.DocXml.TypeComments]</code> `readonly`

Information about the type this <see cref="T:Docshark.Core.Mapper.Codebase.Nodes.TypeNode" /> represents.

### Parent <code><<a href="./Node.md">Docshark.Core.Mapper.Codebase.Nodes.Node</a>></code> `static` `readonly`

The node this node branches off of.



## `public` Methods

### GetName `virtual`

Gets the short name of the current type.

- *@returns* <code title="comments here">System.String</code>

### Save `virtual`

Modifies the provided traces while making a call to <see cref="M:Docshark.Core.Mapper.Codebase.Nodes.TypeNode.WriteInfo(System.String,System.Collections.Generic.Stack{System.String},System.Collections.Generic.Stack{System.String})" /> for writing information as JSON to file.

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