# Node check renderTypeName #1

The most basic building block of all node types.

## `public` Properties

### Parent <code><<a href="./Node.md">Docshark.Core.Mapper.Codebase.Nodes.Node</a>></code> `readonly`

The node this node branches off of.



## `public` Methods

### GetName `abstract`

Gets the name of the node.

- *@returns* System.String

### Save `abstract`

Begins the process of writing this node to file.

- *@param* outputPath `check renderTypeName #2`
- *@param* namespaces `check renderTypeName #2`
- *@param* nestables `check renderTypeName #2`

- *@returns* System.Void

## `protected` Methods

### JoinNamespaces

Joins namespaces into a path.

- *@param* namespaces `check renderTypeName #2`

- *@returns* System.String

### JoinNestables

Joins nestables into a valid filename.

- *@param* nestables `check renderTypeName #2`

- *@returns* System.String