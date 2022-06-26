# Charp

The most intuitive & reliable documentation generator library for C# projects.

> Charp caters to C# and has no plans to expand to other languages. I, Chase William personally am not satified with the documentation generator solutions for C#, therefore I am making my own 😀 Enjoy!

```bash
# Run as installed
charp "<path>.dll" "<path>.xml" -o <output-dir>
```

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

### Dependencies

- .NET 5.0 -> `Charp.Core`
- Node 17.0+ *Recommended*

### Deployment Targets

- [Choca](https://docs.chocolatey.org)

### Config Ideas

```json
{
  /*
    Denotes how the documentation will classify accessibility.
    External, your library is viewed as a dependency
    Internal, your library is viewed as if they were writing it
  */
  "perspective": "external" // or "internal"
}
```