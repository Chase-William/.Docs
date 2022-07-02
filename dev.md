#### Todo List

- Setup better containerized jest test for models & config

- Setup configuration for projects
- Can we use .csproj path instead of *.xml & *.dll
  - If we can, setup system to allow use of either approach
- Test deployment on a system where a user doesn't have .NET 5 already installed
- Test other language versions and framework versions to generate docs from
- Update `Charp` documentation
- Allow a param to be passed to cmd line like *--external* when running no config file

### Basic Markdown Renderer Checklist

- [x] + prop type info
- [x] + method return type info
- [ ] + method return comments
- [x] + method param type info
- [ ] + method param comments
- [x] + field type info
- [x] + event type info
- [x] + "struct" to struct md files
- [x] + "class" to class md files
- [x] + "interface" to interface md files
- [x] + "delegate" to delegate md files
- [x] + "enum" to enum md files
- [x] + standardize ordering of accessibility modifier groupings

#### Bug Checklist

- [x] Nested types are missing encapsulating type in filename
- [x] Allow custom documentation base pathing

### Unit Testing

Needs to be remodeled as the system I devised for `Charp.Core` testing works better.

### Needed

- Implemented interface info needed
- Inherited classes info needed
- Use hyper-links for connecting types
- Table of contents needed
- Indicater for inherited members

### Markdown Standards

#### Accessibility modifier group ordering should be as follows:
- public
- protected
- internal
- internal protected
- private

#### Other info & modifiers are to be ordered as such:
- \<type\>
- const
- readonly
- static
- virtual
- abstract


### Development Dependencies

- .NET 6.0 -> `Charp.Core`
- Node 17.0+ *Recommended*
