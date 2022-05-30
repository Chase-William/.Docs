import INestable from '../src/models/INestable'
import Namespace from '../src/models/Namespace'
import { root } from './init.test'

test('<Test> namespace handled correctly', () => {
  expect(getTestNamespace().name).toBeDefined()
})

test('<Data> namespace handled correctly', () => {
  expect(getDataNamespace().name).toBeDefined()
})

test('<Classes> namespace handled correctly', () => {
  expect(getClassNamespace().name).toBeDefined()
})

test('<Enumerations> namespace handled correctly', () => {
  expect(getEnumerationNamespace().name).toBeDefined()
})

test('<Interfaces> namespace handled correctly', () => {
  expect(getInterfaceNamespace().name).toBeDefined()
})

test('<Delegates> namespace handled correctly', () => {
  expect(getDelegateNamespace().name).toBeDefined()
})

test('<Structs> namespace handled correctly', () => {
  expect(getStructNamespace().name).toBeDefined()
})

/*

  functions BELOW:
  Tested helper functions to make testing less of a chore,
  but not to compromise the test with it's own complexity.

*/


export function getTestNamespace(): Namespace {
  return root.childNodes.get('Test') as Namespace
}

export function getDataNamespace(): Namespace {
  return (root.childNodes.get('Test') as INestable)
    .childNodes.get('Data') as Namespace
}

export function getClassNamespace(): Namespace {
  return ((root.childNodes.get('Test') as INestable)
    .childNodes.get('Data') as INestable)
    .childNodes.get('Classes') as Namespace
}

export function getEnumerationNamespace(): Namespace {
  return ((root.childNodes.get('Test') as INestable)
    .childNodes.get('Data') as INestable)
    .childNodes.get('Enumerations') as Namespace
}

export function getInterfaceNamespace(): Namespace {
  return ((root.childNodes.get('Test') as INestable)
    .childNodes.get('Data') as INestable)
    .childNodes.get('Interfaces') as Namespace
}

export function getDelegateNamespace(): Namespace {
  return ((root.childNodes.get('Test') as INestable)
    .childNodes.get('Data') as INestable)
    .childNodes.get('Delegates') as Namespace
}

export function getStructNamespace(): Namespace {
  return ((root.childNodes.get('Test') as INestable)
    .childNodes.get('Data') as INestable)
    .childNodes.get('Structs') as Namespace
}