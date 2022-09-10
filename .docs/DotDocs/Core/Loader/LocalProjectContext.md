# <code><span title="A class that extends &lt;see cref=&quot;T:DotDocs.Core.Models.LocalProjectModel&quot; /&gt; to add project information loading functionalities.">LocalProjectContext</span></code> *class*

```
ட LocalProjectModel
  ட Object
```

A class that extends <see cref="T:DotDocs.Core.Models.LocalProjectModel" /> to add project information loading functionalities.

## *public* Properties:

### _Assembly <code>[AssemblyModel](../Models/AssemblyModel.md)</code>



### _DefinedTypes <code><span title="Represents a strongly typed list of objects that can be accessed by index. Provides methods to search, sort, and manipulate lists.">List</span><[TypeModel](../Models/Language/TypeModel.md)></code> *static* *readonly*



### _LocalProjects <code><span title="Represents a strongly typed list of objects that can be accessed by index. Provides methods to search, sort, and manipulate lists.">List</span><[LocalProjectModel](../Models/LocalProjectModel.md)></code>



### Assembly <code><span title="Represents an assembly, which is a reusable, versionable, and self-describing building block of a common language runtime application.">Assembly</span></code>

The reflection-only assembly once loaded.

### AssemblyId <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code>



### AssemblyLoadPath <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code>

The location of the assembly to be loaded.

### DocumentationPath <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code>

The path of the documentation if available.

### Id <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code> *static* *readonly*



### LocalProjects <code><span title="Represents text as a sequence of UTF-16 code units.">String[]</span></code> *static* *readonly*



### ProjectDirectory <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code>



### ProjectFileName <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code>



### ProjectName <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code>



### ProjectPath <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code>





## *public* Methods:

### Dispose(...)

Disposes of unmanaged resources for this <see cref="!:LocalProject" /> only.
Does not dispose of children projects in <see cref="!:LocalProjects" />.



### Exists(...)

```
ட LocalProjectModel
```



- *@param* projectFile <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code>

- *@returns* <code><span title="Represents a Boolean (&lt;see langword=&quot;true&quot; /&gt; or &lt;see langword=&quot;false&quot; /&gt;) value.">Boolean</span></code>

### Load(...)

Loads the project's assembly and processes it's types.

- *@param* assemblies <code><span title="Represents text as a sequence of UTF-16 code units.">String[]</span></code>

