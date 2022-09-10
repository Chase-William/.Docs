# <code><span title="The entry-point for .Docs.Core.">Docsharker</span></code> *class*

The entry-point for .Docs.Core.

## *public* Properties

### Builder <code><a href="BuildManager.md">BuildManager</a></code>

The main hub for controlling preparing, loading, rendering.



## *public* Methods

### Dispose(...) *virtual*

Cleanup unmanaged resources linked with <see cref="P:DotDocs.Core.Docsharker.Builder" />.



### Load(...)

Loads types from assemblies and documentation for all entities where available.



### Prepare(...)

Prepares the <see cref="T:DotDocs.Core.BuildManager" /> for loading information by modifing .csproj files where needed and building all projects to collect information.



### Render(...)

Cleans the output dir and renderers all documentation.

