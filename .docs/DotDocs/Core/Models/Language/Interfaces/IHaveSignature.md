# <code><span title="Represents a type that has functional based documentation like parameters and return type.">IHaveSignature</span></code> *interface*

Represents a type that has functional based documentation like parameters and return type.

## *public* Properties

### Parameters <code><a href="..\Parameters\ParameterModel.md">ParameterModel</a>[]</code> *static* *abstract* *readonly*

Parameters used in the function signature.

### ReturnParameter <code><a href="..\Parameters\ParameterModel.md">ParameterModel</a></code> *static* *abstract* *readonly*





## *public* Methods

### GetParameters(...) *virtual*

Gets all the parameter information and organizes it before returning it.

- *@param* info <code><span title="Discovers the attributes of a method and provides access to method metadata.">MethodInfo</span></code>

- *@returns* <code><a href="..\Parameters\ParameterModel.md">ParameterModel</a>[]</code>