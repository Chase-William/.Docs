<p align="center">
  <img src="./resources/media/.docs-yellow-1024x.png" style="width: 450px;margin-left: auto;margin-right: auto;">
</p>

# DotDocs *(.Docs)*

DotDocs is an intuitive & reliable documentation generator library for C# projects.

> DotDocs caters to C# and has no plans to expand to other languages. In my opinion, C#/.NET community doesn't have a intuitive documentation generator. Therefore, I am building this solution for the community, enjoy! 😊

## Installation Guide

> **Makes sure you have the .NET 6.0 runtime installed on your machine for DotDocs to work.**

### Through Chocolately *(recommended)*

Download DotDocs through chocolately using the command below:

```sh
# Administrator Rights Required
choco install dotdocs --pre 
```

### Directly From Github

Download and unzip the latest release from [here](https://github.com/Chase-William/.Docs/releases/).

Then configure your environment variables for *dotdocs.exe* and you're set.

## Usage Options

### Use `.csproj`

```sh
# Provide a path to a specific .csproj
# Provide a location for docs to be put
dotdocs "<path-to-project-file>.csproj"
```

```sh
# Provide a path to a specific .csproj
# Provide a location for the documentation to be put (.Docs will create a folder if needed)
# Provide a configuration file
dotdocs "<path-to-project-file>.csproj" -o "<output-folder-path>" -c "<config-file>.json"
```

### Use `.dll` & `.xml`

```bash
# Provide a path to a .dll to be used
# Provide a path to a .xml file to be used
# Provide a location for docs to be put
# Provide a configuration file
charp -dll "<path>.dll" -xml "<path>.xml" -o "<output-path>" -c "<config-file>.json"
```

Checkout the wiki for more information! ☕