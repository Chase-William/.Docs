import { XMLBuilder, XMLParser } from "fast-xml-parser";
import { readFileSync, writeFileSync } from "fs";

/**
 * Checks to see if the .csproj is setup to produce .xml docs.
 * If not, will be configured to produce xml docs and this is reported
 * via the boolean returned.
 * @param csprojPath path to the .csproj to read
 * @returns true if building is needed, false otherwise
 */
// export default function checkAndConfigProjectIfNeeded(csprojPath: string): boolean {
//   // Indicates if we will need to build the .csproj
//   let mustBuild = false
//   const parser = new XMLParser({ ignoreAttributes: false });
//   const csproj = parser.parse(readFileSync(csprojPath, { encoding: 'utf-8' }));

//   // Check to see if this project has been configured to generate xml comments
//   if (typeof csproj.Project.PropertyGroup.GenerateDocumentationFile === 'undefined') {
//     csproj.Project.PropertyGroup.GenerateDocumentationFile = 'True'
//     mustBuild = true
//   }

//   const builder = new XMLBuilder({ ignoreAttributes: false });
//   const xmlContent = builder.build(csproj);

//   writeFileSync(csprojPath, xmlContent)
  
//   return mustBuild
// }