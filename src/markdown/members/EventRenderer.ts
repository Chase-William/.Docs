import EventModel from "../../models/members/EventModel"
import { getOptionalSummary } from "../CommentsRenderer"
import divider, { check, optionalDivider } from "../Util"

export default function eventRenderer(events: EventModel[]): string {
  // Ascending Alphabetical
  events.sort((a, b) => a.name.localeCompare(b.name))
  const publicEvents = new Array<EventModel>()
  const privateEvents = new Array<EventModel>()
  const protectedEvents = new Array<EventModel>()
  const internalEvents = new Array<EventModel>()
  const internalAndProtectedEvents = new Array<EventModel>()

  for (const event of events) {
    if (event.isInternal && event.isProtected) {
      internalAndProtectedEvents.push(event)
    } else if (event.isInternal) {
      internalEvents.push(event)
    } else if (event.isProtected) {
      protectedEvents.push(event)
    } else if (event.isPublic) {
      publicEvents.push(event)
    } else { // private
      privateEvents.push(event)
    }
  }

  return (
    renderEvents(publicEvents, '## `public`') +
    optionalDivider(protectedEvents) +
    renderEvents(protectedEvents, '## `protected`') +    
    optionalDivider(internalEvents) +
    renderEvents(internalEvents, '## `internal`') +   
    optionalDivider(internalAndProtectedEvents) +
    renderEvents(internalAndProtectedEvents, '## `internal protected`') +
    optionalDivider(privateEvents) +
    renderEvents(privateEvents, '## `private`')
  ) 
}

function renderEvents(events: EventModel[], title: string): string {
  if (check(events)) return ''

  let content = title + ' Events'

  for (const event of events) {
    content += (
      divider() +
      renderEventHeader(event) +
      divider() +
      getOptionalSummary(event.comments)
    )
  }
  return content
}

function renderEventHeader(event: EventModel): string {
  return `### ${event.name}\`<${
    event.type}>\`${
    event.isStatic ? ' `static`' : ''}${
    event.isVirtual ? ' `virtual`' : ''}${
    event.isAbstract ? ' `abstract`' : ''}`
}

// function renderEvents(events: EventModel[]): string {
//   let content = ''
//   for (const event of events) {
//     content += (
//       `|${event.name}|\`${event.type}\`|${getOptionalSummary(event.comments)}|\n`
//     )
//   }
//   return content
// }