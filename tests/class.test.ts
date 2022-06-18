import ClassModel from '../src/models/types/ClassModel'
import { getClassNamespace } from './namespace.test'

let boat: ClassModel
let canoe: ClassModel
let runabout: ClassModel
let sailboat: ClassModel
let yacht: ClassModel

test('<Boat, Canoe, Runabout, Sailboat, Yacht> classes exist', () => {
  const classes = getClassNamespace()

  boat = classes.childNodes.get('Boat') as ClassModel
  canoe = classes.childNodes.get('Canoe') as ClassModel
  runabout = classes.childNodes.get('Runabout') as ClassModel
  sailboat = classes.childNodes.get('Sailboat') as ClassModel
  yacht = classes.childNodes.get('Yacht') as ClassModel

  expect(boat.name).toBe('Boat')
  expect(canoe.name).toBe('Canoe')
  expect(runabout.name).toBe('Runabout')
  expect(sailboat.name).toBe('Sailboat')
  expect(yacht.name).toBe('Yacht')
})

test('<Boat> has <Docked, UnDocked> events', () => {
  expect(boat.events).toBeDefined()
  expect(boat.events).not.toBeNull()

  const eventNames = boat.events.map(event => {
    return event.name
  })

  expect(eventNames).toContain('Docked')
  expect(eventNames).toContain('UnDocked')
})

let builder: ClassModel

test('<Canoe> has <Builder> class as a child', () => {
  builder = (getClassNamespace().childNodes.get('Canoe') as ClassModel).childNodes.get('Builder') as ClassModel

  expect(builder).toBeDefined()
  expect(builder).not.toBeNull()
  expect(builder.name).toBe('Builder')
})

test('<Canoe+Builder> nested class has the correct parent', () => {
  expect(builder.parent).toBe(getClassNamespace().childNodes.get('Canoe'))
})