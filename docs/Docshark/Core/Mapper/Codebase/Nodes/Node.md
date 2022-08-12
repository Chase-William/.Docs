# Node undefined

The most basic building block of all node types.

## `public` Properties

### Parent <code><<a href="./Docshark\Core\Mapper\Codebase\Nodes.md">Docshark.Core.Mapper.Codebase.Nodes.Node</a>></code> `readonly`

The node this node branches off of.



## `public` Methods

### GetName `abstract`

Gets the name of the node.

- *@returns* System.String

### Save `abstract`

Begins the process of writing this node to file.

- *@param* outputPath `System.String`
- *@param* namespaces `System.Collections.Generic.Stack`1[System.String]`
- *@param* nestables `System.Collections.Generic.Stack`1[System.String]`

- *@returns* System.Void

## `protected` Methods

### JoinNamespaces

Joins namespaces into a path.

- *@param* namespaces `System.Collections.Generic.Stack`1[System.String]`

- *@returns* System.String

### JoinNestables

Joins nestables into a valid filename.

- *@param* nestables `System.Collections.Generic.Stack`1[System.String]`

- *@returns* System.String