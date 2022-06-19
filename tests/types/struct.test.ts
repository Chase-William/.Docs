import StructModel from "../../src/models/types/StructModel"
import { getStructNamespace } from "./namespace.test"

let point: StructModel


test('<Boat, Canoe, Runabout, Sailboat, Yacht> classes exist', () => {
  const delegates = getStructNamespace()

  point = delegates.childNodes.get('Point') as StructModel

  expect(point.name).toBe('Point')
})