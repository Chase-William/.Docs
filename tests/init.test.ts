import ModelTree from "../src/models/ModelTree"

export let root: ModelTree

beforeAll(() => {
  root = new ModelTree('Charp', null);
  root.readChildren('json', new Array<string>(), root);
})

test('root initialized correctly', () => {
  expect(root).toBeDefined()
  expect(root).not.toBeNull() 
});