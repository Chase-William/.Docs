import EventModel from "../../models/members/EventModel"
import { getOptionalSummary } from "../CommentsRenderer"
import divider from "../Util"

export default function eventRenderer(events: EventModel[]): string {
  return (
    '## Events' + 
    divider() +
    '| Name | Type | Summary |\n' +
    '| ---- | ---- | ------- |\n' +
    renderEvents(events)
  )
}

function renderEvents(events: EventModel[]): string {
  let content = ''
  for (const event of events) {
    content += (
      `|${event.name}|\`${event.type}\`|${getOptionalSummary(event.comments)}|\n`
    )
  }
  return content
}