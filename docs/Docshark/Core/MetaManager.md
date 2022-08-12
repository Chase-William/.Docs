# MetaManager check renderTypeName

Maps each type used in the target project.



## `public` Methods

### AddProjects

Summary not provided.

- *@param* rootProject <code><<a href="./Models\Project\LocalProject.md">Docshark.Core.Models.Project.LocalProject</a>></code>

- *@returns* <code title="comments here">System.Void</code>

### AddType

Adds given type and all dependent types to global type mapper if needed. 
IMPORTANT: This method will perform a deep analysis of all types used in any manner by this type. 
For example, types used in inheritance, encapsulated members, and even type arguments are analysed
and added to the type mapper if needed.

- *@param* type check renderTypeName

- *@returns* <code title="comments here">System.Void</code>

### Save

Summary not provided.

- *@param* outputPath <code title="comments here">System.String</code>

- *@returns* <code title="comments here">System.Void</code>