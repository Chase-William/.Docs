import EnumModel from '../../src/models/types/EnumModel'
import { getEnumerationNamespace } from './namespace.test'

let engineSize: EnumModel

test('<EngineSize> enum exist', () => {
  const classes = getEnumerationNamespace()
  engineSize = classes.childNodes.get('EngineSize') as EnumModel
  expect(engineSize).toBeDefined()
  expect(engineSize).not.toBeNull()  
})

test('<EngineSize> has values of <Small, Medium, Large>', () => {
  expect(engineSize.fields).toBeDefined()
  expect(engineSize.fields).not.toBeNull()
  expect(engineSize.fields.length).toBe(3)

  const names = engineSize.fields.map(field => {
    return field.name
  })

  expect(names).toContain('Small')
  expect(names).toContain('Medium')
  expect(names).toContain('Large')
})