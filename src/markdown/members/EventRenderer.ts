import EventConfigModel from "../../models/config/members/EventConfigModel"
import EventModel from "../../models/members/EventModel"
import { getOptionalSummary } from "../CommentsRenderer"
import divider, { renderIsStaticTag, renderVirtualAndStaticTags } from "../Util"

export function renderEvent(event: EventModel, config: EventConfigModel): string {
  return (
    divider() +
    renderEventHeader(event, config) +
    divider() +
    getOptionalSummary(event.comments)
  )
}

function renderEventHeader(event: EventModel, config: EventConfigModel): string {
  return (
    `### ${event.name}\`<${event.type}>\`` +
    renderIsStaticTag(event, config) +
    renderVirtualAndStaticTags(event, config)
  )
}
