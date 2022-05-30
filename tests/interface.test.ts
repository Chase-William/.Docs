import InterfaceModel from "../src/models/types/InterfaceModel"
import CommonComment from "../src/models/written/CommonComment"
import { getInterfaceNamespace } from "./namespace.test"


let iPowerable: InterfaceModel

test('<Boat, Canoe, Runabout, Sailboat, Yacht> classes exist', () => {
  const interfaces = getInterfaceNamespace()

  iPowerable = interfaces.childNodes.get('IPowerable') as InterfaceModel
  expect(iPowerable.name).toBe('IPowerable')
})

test('<IPowerable> has parent', () => {
  expect(iPowerable.parent).toBeDefined()
  expect(iPowerable.parent).not.toBeNull()
  expect(iPowerable.parent.name).toBe('Interfaces')
})

// Unable to access leafs members of my custom objects directly, only via console.log(the containing object)

test('<IPowerable> comments handled correctly', () => {
  expect(iPowerable.comments).toBeDefined()
  expect(iPowerable.comments).not.toBeNull()
  expect(iPowerable.comments.summary).toBe('Represents an entity that features engine power.')
})

test('<IPowerable> has properties', () => {
  expect(iPowerable.properties).toBeDefined()
  expect(iPowerable.properties).not.toBeNull()
  expect(iPowerable.properties.length).toBe(2)

  const names = iPowerable.properties.map(prop => {
    return prop.name
  })
  
  expect(names).toContain('Engine')
  expect(names).toContain('EngineCount')
})