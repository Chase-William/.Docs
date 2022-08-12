# MetaManager undefined

Maps each type used in the target project.



## `public` Methods

### AddProjects

Summary not provided.

- *@param* rootProject `Docshark.Core.Models.Project.LocalProject`

- *@returns* System.Void

### AddType

Adds given type and all dependent types to global type mapper if needed. 
IMPORTANT: This method will perform a deep analysis of all types used in any manner by this type. 
For example, types used in inheritance, encapsulated members, and even type arguments are analysed
and added to the type mapper if needed.

- *@param* type `T`

- *@returns* System.Void

### Save

Summary not provided.

- *@param* outputPath `System.String`

- *@returns* System.Void