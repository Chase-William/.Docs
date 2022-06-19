import DelegateModel from "../../src/models/types/DelegateModel"
import { getDelegateNamespace } from "./namespace.test"

let doSomeMathWillYou: DelegateModel


test('<Boat, Canoe, Runabout, Sailboat, Yacht> classes exist', () => {
  const delegates = getDelegateNamespace()

  doSomeMathWillYou = delegates.childNodes.get('DoSomeMathWillYou') as DelegateModel

  expect(doSomeMathWillYou.name).toBe('DoSomeMathWillYou')
})