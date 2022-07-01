# Charp

The most intuitive & reliable documentation generator library for C# projects.

> Charp caters to C# and has no plans to expand to other languages. I, Chase William personally am not satified with the documentation generator solutions for C#, therefore I am making my own 😀 Enjoy!

```bash
# Run as installed
charp "<path>.dll" "<path>.xml" -o <output-dir>
```

[Charp on Chocolatey](https://community.chocolatey.org/packages/charp/)



### Use Dependencies

- .NET 5.0, install the .NET 5.0 workload for your system to leverage this package
  
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
  "perspective": "external", // or "internal"
  // Overrides from default based on "perspective"
  "type": { // type overrides
    "class": { // class specific overrides

    },
    "interface": { // interface specific overrides

    },
    "struct": { // struct specific overrides

    },
    "delegate": { // delegate specific overrides

    }
  },
  "member": { // member overrides
    "property": { // property specific overrides

    },
    "field": { // field specific overrides

    },
    "method": { // method specific overrides

    },    
    "event": { // event specific overrides

    }
  }
}
```

### Full Config Structure

- <a href="#perspective">*perspective*</a>, `string` either "<a href="#internal">*internal*</a>" or "<a href="#external">*external*</a>"
- <a href="#type">*type*</a>
  - <a href="#class">*class*</a>
    - <a href="#showPublic">*showPublic*</a>, `boolean`
    - <a href="#showProtected">*showProtected*</a>, `boolean`
    - <a href="#showInternal">*showInternal*</a>, `boolean`
    - <a href="#showInternalProtected">*showInternalProtected*</a>, `boolean`
    - <a href="#showPrivate">*showPrivate*</a>, `boolean`
  - <a href="#interface">*interface*</a>
    - <a href="#showPublic">*showPublic*</a>, `boolean`
    - <a href="#showProtected">*showProtected*</a>, `boolean`
    - <a href="#showInternal">*showInternal*</a>, `boolean`
    - <a href="#showInternalProtected">*showInternalProtected*</a>, `boolean`
    - <a href="#showPrivate">*showPrivate*</a>, `boolean`
  - <a href="#struct">*struct*</a>
    - <a href="#showPublic">*showPublic*</a>, `boolean`
    - <a href="#showProtected">*showProtected*</a>, `boolean`
    - <a href="#showInternal">*showInternal*</a>, `boolean`
    - <a href="#showInternalProtected">*showInternalProtected*</a>, `boolean`
    - <a href="#showPrivate">*showPrivate*</a>, `boolean`
  - <a href="#enum">*enum*</a>
    - <a href="#showPublic">*showPublic*</a>, `boolean`
    - <a href="#showProtected">*showProtected*</a>, `boolean`
    - <a href="#showInternal">*showInternal*</a>, `boolean`
    - <a href="#showInternalProtected">*showInternalProtected*</a>, `boolean`
    - <a href="#showPrivate">*showPrivate*</a>, `boolean`
  - <a href="#delegate">*delegate*</a>
    - <a href="#showPublic">*showPublic*</a>, `boolean`
    - <a href="#showProtected">*showProtected*</a>, `boolean`
    - <a href="#showInternal">*showInternal*</a>, `boolean`
    - <a href="#showInternalProtected">*showInternalProtected*</a>, `boolean`
    - <a href="#showPrivate">*showPrivate*</a>, `boolean`
- <a href="#member">*member*</a>
  - <a href="#property">*property*</a>
    - <a href="#showPublic">*showPublic*</a>, `boolean`
    - <a href="#showProtected">*showProtected*</a>, `boolean`
    - <a href="#showInternal">*showInternal*</a>, `boolean`
    - <a href="#showInternalProtected">*showInternalProtected*</a>, `boolean`
    - <a href="#showPrivate">*showPrivate*</a>, `boolean`
  - <a href="#field">*field*</a>
    - <a href="#showPublic">*showPublic*</a>, `boolean`
    - <a href="#showProtected">*showProtected*</a>, `boolean`
    - <a href="#showInternal">*showInternal*</a>, `boolean`
    - <a href="#showInternalProtected">*showInternalProtected*</a>, `boolean`
    - <a href="#showPrivate">*showPrivate*</a>, `boolean`
  - <a href="#method">*method*</a>
    - <a href="#showPublic">*showPublic*</a>, `boolean`
    - <a href="#showProtected">*showProtected*</a>, `boolean`
    - <a href="#showInternal">*showInternal*</a>, `boolean`
    - <a href="#showInternalProtected">*showInternalProtected*</a>, `boolean`
    - <a href="#showPrivate">*showPrivate*</a>, `boolean`
  - <a href="#event">*event*</a>
    - <a href="#showPublic">*showPublic*</a>, `boolean`
    - <a href="#showProtected">*showProtected*</a>, `boolean`
    - <a href="#showInternal">*showInternal*</a>, `boolean`
    - <a href="#showInternalProtected">*showInternalProtected*</a>, `boolean`
    - <a href="#showPrivate">*showPrivate*</a>, `boolean`

### Config Definitions

The only required configuration is *perspective* as everything else is an optional override to the *perspective* value used.

- <span id="perspective"></span>**perspective** *(required)*, Easily set doc generation style so that it may cater to a specific audience
  - <span id="internal"></span>`internal`, Helpful to those directly developing the lib itself
  - <span id="external"></span>`external`, Helpful to those leveraging the lib as a dependency
  
- <span id="type"></span>**type**, Implementing the following allows overriding of it's defaults
  - <span id="class"></span>`class`
  - <span id="interface"></span>`interface`
  - <span id="struct"></span>`struct`
  - <span id="enum"></span>`enum`
  - <span id="delegate"></span>`delegate`

- <span id="member"></span>**member**, Implementing the following allows overriding of it's defaults
  - <span id="property"></span>`property`
    - <span id="denoteReadonlyProperty"></span>*denoteReadonly*, display the `readonly` tag when setter isn't available
    - <span id="denoteSetonlyProperty"></span>*denoteSetonly*, display the `setonly` tag when getter isn't available
  - <span id="field"></span>`field`
    - <span id="denoteConst"></span>*denoteConst*, display the `const` tag when constant
    - <span id="denoteReadonlyField"></span>*denoteReadonly*, display the `readonly` tag when readonly
  - <span id="method"></span>`method`
  - <span id="event"></span>`event`

##### Accessibility modifiers

- <span id="showPublic"></span>*showPublic*, show instances that are public
- <span id="showProtected"></span>*showProtected*, show instances that are protected
- <span id="showInternal"></span>*showInternal*, show instances that are internal
- <span id="showInternalProtected"></span>*showInternalProtected*, show instances that are internal protected
- <span id="showPrivate"></span>*showPrivate*, show instances that are private

##### Others

- <span id="denoteStatic"></span>*denoteStatic*, display the `static` tag when static
- <span id="denoteVirtual"></span>*denoteVirtual*, display the `virtual` tag when virtual
- <span id="denoteAbstract"></span>*denoteAbstract*, display the `abstract` tag when abstract
