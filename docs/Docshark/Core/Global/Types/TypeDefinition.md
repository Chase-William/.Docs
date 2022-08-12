# TypeDefinition undefined

```
ட Docshark.Core.Global.Definition
  ட System.Object
```

Represents a type in a codebase that is linked to a specific project.

## `public` Properties

### AssemblyForeignKey <code title="comments go here"><System.String></code>

A foreign key that links to the project and assembly.

### Comments <code title="comments go here"><LoxSmoke.DocXml.CommonComments></code>

Comments written about this type.

### Namespace <code title="comments go here"><System.String></code>

The entire namespace leading to this types location.        

### Parent <code title="comments go here"><System.String></code>

A primary key identifying the parent type.

### TypeArguments <code title="comments go here"><System.Collections.Generic.List`1[System.String]></code>

A list of primary keys identifying the type arguments.

### TypeDescription <code title="comments go here"><System.String></code>

The namespace to the type with the type name and all type arguments if present.



## `public` Methods

### From

Create a <see cref="T:Docshark.Core.Global.Types.TypeDefinition" /> instance from the type info given.
Uses the <see cref="T:Docshark.Core.Global.Assemblies.AssemblyMapper" /> if given to assist in building the 
<see cref="P:Docshark.Core.Global.Assemblies.AssemblyMapper.MappedDefinitions" /> map while building the 
<see cref="P:Docshark.Core.Global.Types.TypeMapper.MappedDefinitions" />.

- *@param* info `System.Type`
- *@param* asmMapper `Docshark.Core.Global.Assemblies.AssemblyMapper`

- *@returns* Docshark.Core.Global.Types.TypeDefinition

### GetPrimaryKey `virtual`

Summary not provided.

- *@returns* System.String