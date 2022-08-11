import ICodebaseMap from "../../models/global/ICodebaseMap"

export function renderTypeName(typeStr: string, map: ICodebaseMap) {
  const result = map.typeMap.get(typeStr)
  if (typeof result === 'undefined')
  {
    console.log(typeStr)
    return 'undefined'
  }
  

  return (
    '<code title="' + result.namespace + '">' +
    '\\<' + result.typeDescription + '\\>' +
    '</code>'
  )
}