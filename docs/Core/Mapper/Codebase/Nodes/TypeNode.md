# TypeNode undefined

```
ட Docshark.Core.Mapper.Codebase.Nodes.Node
  ட System.Object
```

A class that represents a defined type.

## `public` Properties

### Member <code title="comments go here"><Docshark.Core.Models.Codebase.Types.TypeMember`2[System.Reflection.TypeInfo,LoxSmoke.DocXml.TypeComments]></code> `readonly`

Information about the type this <see cref="T:Docshark.Core.Mapper.Codebase.Nodes.TypeNode" /> represents.

### Parent <code><<a href="./Docshark\Core\Mapper\Codebase\Nodes\.md">Docshark.Core.Mapper.Codebase.Nodes.Node</a>></code> `static` `readonly`

The node this node branches off of.



## `public` Methods

### GetName `virtual`

Gets the short name of the current type.

- *@returns* System.String

### Save `virtual`

Modifies the provided traces while making a call to <see cref="M:Docshark.Core.Mapper.Codebase.Nodes.TypeNode.WriteInfo(System.String,System.Collections.Generic.Stack{System.String},System.Collections.Generic.Stack{System.String})" /> for writing information as JSON to file.

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