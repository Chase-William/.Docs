# IFunctional check renderTypeName

Represents a type that has functional based documentation like parameters and return type.

## `public` Properties

### Parameters <code title="comments here">Docshark.Core.Models.Codebase.Parameter[]</code> `static` `abstract` `readonly`

Parameters used in the function signature.

### ReturnType <code title="comments here">System.String</code> `static` `abstract` `readonly`

Return type of the function signature.



## `public` Methods

### GetParameters `virtual`

Gets all the parameter information and organizes it before returning it.

- *@param* info <code title="comments here">System.Reflection.MethodInfo</code>

- *@returns* <code title="comments here">Docshark.Core.Models.Codebase.Parameter[]</code>