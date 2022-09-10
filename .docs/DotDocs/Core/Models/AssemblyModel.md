# <code><span title="A class that represents an assembly as a model.">AssemblyModel</span></code> *class*

A class that represents an assembly as a model.

## *public* Properties

### Assembly <code><span title="Represents an assembly, which is a reusable, versionable, and self-describing building block of a common language runtime application.">Assembly</span></code>

The underlying assembly instance from the runtime.

### FullName <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code> *static* *readonly*

<inheritdoc cref="P:System.Reflection.Assembly.FullName" />

### Id <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code> *static* *readonly*

The id for this assembly.

### LocalProject <code><a href="LocalProjectModel.md">LocalProjectModel</a></code>

A reference to the local project that creates this assembly if it exists in the context.

### Name <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code> *static* *readonly*

<inheritdoc cref="P:System.Reflection.AssemblyName.Name" />

### Types <code><span title="Represents a strongly typed list of objects that can be accessed by index. Provides methods to search, sort, and manipulate lists.">List</span><<a href="Language\TypeModel.md">TypeModel</a>></code>

Contains all the types defined specifically in this assembly.

