# TypeNode check renderTypeName #1

```
ட Docshark.Core.Mapper.Codebase.Nodes.Node
  ட System.Object
```

A class that represents a defined type.

## `public` Properties

### Member check renderTypeName #2 `readonly`

Information about the type this <see cref="T:Docshark.Core.Mapper.Codebase.Nodes.TypeNode" /> represents.

### Parent <code><<a href="./Node.md">Docshark.Core.Mapper.Codebase.Nodes.Node</a>></code> `static` `readonly`

The node this node branches off of.



## `public` Methods

### GetName `virtual`

Gets the short name of the current type.

- *@returns* System.String

### Save `virtual`

Modifies the provided traces while making a call to <see cref="M:Docshark.Core.Mapper.Codebase.Nodes.TypeNode.WriteInfo(System.String,System.Collections.Generic.Stack{System.String},System.Collections.Generic.Stack{System.String})" /> for writing information as JSON to file.

- *@param* outputPath check renderTypeName #2
- *@param* namespaces check renderTypeName #2
- *@param* nestables check renderTypeName #2

- *@returns* System.Void

## `protected` Methods

### WriteInfo `virtual`

Writes all information regarding this type to file as JSON.

- *@param* outputPath check renderTypeName #2
- *@param* namespaces check renderTypeName #2
- *@param* nestables check renderTypeName #2

- *@returns* System.Void