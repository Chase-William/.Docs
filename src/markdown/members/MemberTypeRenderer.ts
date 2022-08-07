import { TYPE_MAP } from "../../app";

export function renderTypeName(typeStr: string) {
  const result = TYPE_MAP.get(typeStr)
  if (typeof result === 'undefined')
  {
    console.log(typeStr)
    return 'undefined'
  }
  

  return (
    '<code title="' + result.assemblyPath + '">' +
    '\\<' + result.typeName + '\\>' +
    '</code>'
  )
}