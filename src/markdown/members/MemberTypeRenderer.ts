import { IGlobalMetaMap } from "../../models/global/MapperManager"

export function renderTypeName(typeStr: string, map: IGlobalMetaMap) {
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