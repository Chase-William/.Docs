# MetaManager check renderTypeName #1

Maps each type used in the target project.



## `public` Methods

### AddProjects

Summary not provided.

- *@param* rootProject <code><<a href="./Models\Project\LocalProject.md">Docshark.Core.Models.Project.LocalProject</a>></code>

- *@returns* System.Void

### AddType

Adds given type and all dependent types to global type mapper if needed. 
IMPORTANT: This method will perform a deep analysis of all types used in any manner by this type. 
For example, types used in inheritance, encapsulated members, and even type arguments are analysed
and added to the type mapper if needed.

- *@param* type check renderTypeName #1

- *@returns* System.Void

### Save

Summary not provided.

- *@param* outputPath check renderTypeName #2

- *@returns* System.Void