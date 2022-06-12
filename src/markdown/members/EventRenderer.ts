import EventModel from "../../models/members/EventModel"
import { getOptionalSummary } from "../CommentsRenderer"

export default function renderEvents(events: EventModel[]): string {
  let content = (
    `\n\n## Events\n| Name | Type | Summary |\n| ---- | ---- | ------- |\n`
  )
  
  for (const event of events) {
    content += (
      `|${event.name}|\`${event.type}\`|${getOptionalSummary(event.comments)}|\n`
    )
  }  

  return content
}