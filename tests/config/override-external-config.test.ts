/**
 * 
 * Test user config file with "perspective": "external"
 * 
 */

import Configuration, { loadConfiguration } from '../../src/models/config/Configuration'

let config: Configuration

beforeAll(() => {
  config = loadConfiguration(process.cwd(), './tests/config/data/override-external-config.json')
})

test('User configuration file was loaded.', () => {
  expect(config).not.toBeFalsy()
})

/**
 * 
 * Testing Types
 * 
 */

test('Class configuration overrides correctly', () => {
  expect(config.type.class.showIfPublic).toBe(false)
  expect(config.type.class.showIfProtected).toBe(true)
  expect(config.type.class.showIfInternal).toBe(false)
  expect(config.type.class.showIfInternalProtected).toBe(true)
  expect(config.type.class.showIfPrivate).toBe(false)
  expect(config.type.class.denoteIfStatic).toBe(false)
  expect(config.type.class.denoteIfVirtual).toBe(true)
  expect(config.type.class.denoteIfAbstract).toBe(true)
})

test('Interface configuration overrides correctly', () => {
  expect(config.type.interface.showIfPublic).toBe(false)
  expect(config.type.interface.showIfProtected).toBe(true)
  expect(config.type.interface.showIfInternal).toBe(false)
  expect(config.type.interface.showIfInternalProtected).toBe(true)
  expect(config.type.interface.showIfPrivate).toBe(false)
})


test('Struct configuration overrides correctly', () => {
  expect(config.type.struct.showIfPublic).toBe(true)
  expect(config.type.struct.showIfProtected).toBe(true)
  expect(config.type.struct.showIfInternal).toBe(false)
  expect(config.type.struct.showIfInternalProtected).toBe(false)
  expect(config.type.struct.showIfPrivate).toBe(false)
})


test('Enum configuration overrides correctly', () => {
  expect(config.type.enum.showIfPublic).toBe(false)
  expect(config.type.enum.showIfProtected).toBe(true)
  expect(config.type.enum.showIfInternal).toBe(false)
  expect(config.type.enum.showIfInternalProtected).toBe(true)
  expect(config.type.enum.showIfPrivate).toBe(false)
})


test('Delegate configuration overrides correctly', () => {
  expect(config.type.delegate.showIfPublic).toBe(false)
  expect(config.type.delegate.showIfProtected).toBe(true)
  expect(config.type.delegate.showIfInternal).toBe(false)
  expect(config.type.delegate.showIfInternalProtected).toBe(true)
  expect(config.type.delegate.showIfPrivate).toBe(false)
})

/**
 * 
 * Testing Members
 * 
 */

test('Property configuration overrides correctly', () => {
  expect(config.member.property.showIfPublic).toBe(false)
  expect(config.member.property.showIfProtected).toBe(true)
  expect(config.member.property.showIfInternal).toBe(false)
  expect(config.member.property.showIfInternalProtected).toBe(true)
  expect(config.member.property.showIfPrivate).toBe(false)
  expect(config.member.property.denoteIfStatic).toBe(false)
  expect(config.member.property.denoteIfSetonly).toBe(false)
  expect(config.member.property.denoteIfReadonly).toBe(true)
  expect(config.member.property.denoteIfHasGetter).toBe(true)
  expect(config.member.property.denoteIfHasSetter).toBe(false)
  expect(config.member.property.denoteIfGetPublic).toBe(false)
  expect(config.member.property.denoteIfGetProtected).toBe(false)
  expect(config.member.property.denoteIfGetInternal).toBe(false)
  expect(config.member.property.denoteIfGetInternalProtected).toBe(true)
  expect(config.member.property.denoteIfGetPrivate).toBe(true)
  expect(config.member.property.denoteIfSetPublic).toBe(true)
  expect(config.member.property.denoteIfSetProtected).toBe(false)
  expect(config.member.property.denoteIfSetInternal).toBe(false)
  expect(config.member.property.denoteIfSetInternalProtected).toBe(false)
  expect(config.member.property.denoteIfSetPrivate).toBe(false)
})

test('Field configuration overrides correctly', () => {
  expect(config.member.field.showIfPublic).toBe(false)
  expect(config.member.field.showIfProtected).toBe(true)
  expect(config.member.field.showIfInternal).toBe(false)
  expect(config.member.field.showIfInternalProtected).toBe(true)
  expect(config.member.field.showIfPrivate).toBe(false)
  expect(config.member.field.denoteIfStatic).toBe(false)
  expect(config.member.field.denoteIfReadonly).toBe(true)
})

test('Method configuration overrides correctly', () => {
  expect(config.member.method.showIfPublic).toBe(true)
  expect(config.member.method.showIfProtected).toBe(true)
  expect(config.member.method.showIfInternal).toBe(false)
  expect(config.member.method.showIfInternalProtected).toBe(false)
  expect(config.member.method.showIfPrivate).toBe(false)
  expect(config.member.method.denoteIfStatic).toBe(true)
})

test('Event configuration overrides correctly', () => {
  expect(config.member.event.showIfPublic).toBe(false)
  expect(config.member.event.showIfProtected).toBe(true)
  expect(config.member.event.showIfInternal).toBe(false)
  expect(config.member.event.showIfInternalProtected).toBe(true)
  expect(config.member.event.showIfPrivate).toBe(false)
  expect(config.member.event.denoteIfStatic).toBe(false)
})