# <code><span title="The main class for using DotDoc's services.">BuildManager</span></code> *class*

The main class for using DotDoc's services.

## *public* Properties

### ProjectContext <code><a href="Loader\ProjectLoadContext.md">ProjectLoadContext</a></code>

A tree that contains all the local projects the root depends on.



## *public* Methods

### Dispose(...) *virtual*

Use to cleanup unmanaged resources used by the <see cref="P:DotDocs.Core.BuildManager.ProjectContext" />.



### Load(...)

Loads types from assemblies and documentation for all entities where available.



### Prepare(...)

Prepares the <see cref="T:DotDocs.Core.BuildManager" /> for loading information by modifing .csproj files where needed and building all projects to collect information.



### Render(...)

Cleans the output dir and renderers all documentation.



## *public* Fields

### DOTDOCS_ROOT_FOLDER <code><span title="Represents text as a sequence of UTF-16 code units.">String</span></code> *const*

The root folder of all file output produced by this project.