# CodebaseMapper check renderTypeName

A tree of namespaces and types created lazily that represents the structure of one's source code.

## `public` Properties

### Root <code><<a href="./Nodes\NamespaceNode.md">Docshark.Core.Mapper.Codebase.Nodes.NamespaceNode</a>></code> `readonly`

The entry point node.



## `public` Methods

### AddType

Adds a new type under the provided namespace.

- *@param* member <code title="comments here">Docshark.Core.Models.Codebase.Types.TypeMember`2[System.Reflection.TypeInfo,LoxSmoke.DocXml.TypeComments]</code>

- *@returns* <code title="comments here">System.Void</code>

### FindEvent

Searches for an event in the tree.

- *@param* fullName <code title="comments here">System.String</code>

- *@returns* <code title="comments here">Docshark.Core.Models.Codebase.Model`2[System.Reflection.EventInfo,LoxSmoke.DocXml.CommonComments]</code>

### FindField

Searches for a field in the tree.

- *@param* fullName <code title="comments here">System.String</code>

- *@returns* <code title="comments here">Docshark.Core.Models.Codebase.Model`2[System.Reflection.FieldInfo,LoxSmoke.DocXml.CommonComments]</code>

### FindProperty

Searches for a property in the tree.

- *@param* fullName <code title="comments here">System.String</code>

- *@returns* <code title="comments here">Docshark.Core.Models.Codebase.Model`2[System.Reflection.PropertyInfo,LoxSmoke.DocXml.CommonComments]</code>

### FindType

Searches for a type in the tree.

- *@param* fullName <code title="comments here">System.String</code>

- *@returns* <code title="comments here">Docshark.Core.Models.Codebase.Types.TypeMember`2[System.Reflection.TypeInfo,LoxSmoke.DocXml.TypeComments]</code>

### SaveModels

Begins the process of iterating through the tree and writing all nodes to file.

- *@param* outputPath <code title="comments here">System.String</code>

- *@returns* <code title="comments here">System.Void</code>