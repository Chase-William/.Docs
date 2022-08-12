# CodebaseMapper undefined

A tree of namespaces and types created lazily that represents the structure of one's source code.

## `public` Properties

### Root <code><<a href="./Docshark\Core\Mapper\Codebase\Nodes\.md">Docshark.Core.Mapper.Codebase.Nodes.NamespaceNode</a>></code> `readonly`

The entry point node.



## `public` Methods

### AddType

Adds a new type under the provided namespace.

- *@param* member `Docshark.Core.Models.Codebase.Types.TypeMember`2[System.Reflection.TypeInfo,LoxSmoke.DocXml.TypeComments]`

- *@returns* System.Void

### FindEvent

Searches for an event in the tree.

- *@param* fullName `System.String`

- *@returns* Docshark.Core.Models.Codebase.Model`2[System.Reflection.EventInfo,LoxSmoke.DocXml.CommonComments]

### FindField

Searches for a field in the tree.

- *@param* fullName `System.String`

- *@returns* Docshark.Core.Models.Codebase.Model`2[System.Reflection.FieldInfo,LoxSmoke.DocXml.CommonComments]

### FindProperty

Searches for a property in the tree.

- *@param* fullName `System.String`

- *@returns* Docshark.Core.Models.Codebase.Model`2[System.Reflection.PropertyInfo,LoxSmoke.DocXml.CommonComments]

### FindType

Searches for a type in the tree.

- *@param* fullName `System.String`

- *@returns* Docshark.Core.Models.Codebase.Types.TypeMember`2[System.Reflection.TypeInfo,LoxSmoke.DocXml.TypeComments]

### SaveModels

Begins the process of iterating through the tree and writing all nodes to file.

- *@param* outputPath `System.String`

- *@returns* System.Void