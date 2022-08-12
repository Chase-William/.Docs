# TypeDefinition check renderTypeName #1

```
ட Docshark.Core.Global.Definition
  ட System.Object
```

Represents a type in a codebase that is linked to a specific project.

## `public` Properties

### AssemblyForeignKey check renderTypeName #2

A foreign key that links to the project and assembly.

### Comments check renderTypeName #2

Comments written about this type.

### Namespace check renderTypeName #2

The entire namespace leading to this types location.        

### Parent check renderTypeName #2

A primary key identifying the parent type.

### TypeArguments check renderTypeName #2

A list of primary keys identifying the type arguments.

### TypeDescription check renderTypeName #2

The namespace to the type with the type name and all type arguments if present.



## `public` Methods

### From

Create a <see cref="T:Docshark.Core.Global.Types.TypeDefinition" /> instance from the type info given.
Uses the <see cref="T:Docshark.Core.Global.Assemblies.AssemblyMapper" /> if given to assist in building the 
<see cref="P:Docshark.Core.Global.Assemblies.AssemblyMapper.MappedDefinitions" /> map while building the 
<see cref="P:Docshark.Core.Global.Types.TypeMapper.MappedDefinitions" />.

- *@param* info `check renderTypeName #2`
- *@param* asmMapper `<code><<a href="./..\Assemblies\AssemblyMapper.md">Docshark.Core.Global.Assemblies.AssemblyMapper</a>></code>`

- *@returns* Docshark.Core.Global.Types.TypeDefinition

### GetPrimaryKey `virtual`

Summary not provided.

- *@returns* System.String