# Node check renderTypeName

The most basic building block of all node types.

## `public` Properties

### Parent <code><<a href="./Node.md">Docshark.Core.Mapper.Codebase.Nodes.Node</a>></code> `readonly`

The node this node branches off of.



## `public` Methods

### GetName `abstract`

Gets the name of the node.

- *@returns* <code title="comments here">System.String</code>

### Save `abstract`

Begins the process of writing this node to file.

- *@param* outputPath <code title="comments here">System.String</code>
- *@param* namespaces <code title="comments here">System.Collections.Generic.Stack`1[System.String]</code>
- *@param* nestables <code title="comments here">System.Collections.Generic.Stack`1[System.String]</code>

- *@returns* <code title="comments here">System.Void</code>

## `protected` Methods

### JoinNamespaces

Joins namespaces into a path.

- *@param* namespaces <code title="comments here">System.Collections.Generic.Stack`1[System.String]</code>

- *@returns* <code title="comments here">System.String</code>

### JoinNestables

Joins nestables into a valid filename.

- *@param* nestables <code title="comments here">System.Collections.Generic.Stack`1[System.String]</code>

- *@returns* <code title="comments here">System.String</code>