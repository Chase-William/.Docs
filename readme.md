# Charp

The most intuitive & reliable documentation generator library for C# projects.

> Charp only caters to C# and has no plans to expand to other languages. Reason being, targeting additional languages can cause already supported languages user experience to degrade due to efforts being devoted elsewhere. I, Chase William personally am not satified with the documentation generator solutions for C#, therefore I made my own 😀. Enjoy!

### Basic Markdown Renderer Checklist

- [x] + prop type info
- [ ] + method return type info
- [ ] + method return comments
- [ ] + method param type info
- [ ] + method param comments
- [ ] + field type info
- [ ] + event type info
- [ ] + "struct" to struct md files
- [ ] + "class" to class md files
- [ ] + "interface" to interface md files
- [ ] + "delegate" to delegate md files
- [ ] + "enum" to enum md files
- [x] + standardize ordering of accessibility modifier groupings

#### Bug Checklist

- [x] Nested types are missing encapsulating type in filename
- [ ] Allow custom documentation base pathing

### Unit Testing

Needs to be remodeled as the system I devised for `Charp.Core` testing works better.

### To be Implemented after Initial Release

- Interfaces lack interface implementation info.
- Classes lack inheritance info.
- Classes lack interface implementation info.
- Structs lack interface implementation info.
- Need better use of hyper-links for connecting custom type info.

### Markdown Standards

Accessibility modifier group ordering should be as follows:
- public
- protected
- internal
- internal protected
- private


##### Config Ideas

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