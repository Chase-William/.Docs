import EventModel from "../members/EventModel";
import Model from "../Model";

export default interface IHaveEvents {
  events: EventModel[]
}

export function setParentForEvents(model: IHaveEvents & Model) {
  model.events.forEach(event => event.parent = model)
}