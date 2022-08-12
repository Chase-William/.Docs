import EventConfigModel from "../../models/config/members/EventConfigModel"
import ICodebaseMap from "../../models/global/ICodebaseMap"
import EventModel from "../../models/members/EventModel"
import { getOptionalSummary } from "../CommentsRenderer"
import divider, { renderIsStaticTag, renderTypeName, renderVirtualAndStaticTags } from "../Util"

export function renderEvent(event: EventModel, config: EventConfigModel, map: ICodebaseMap): string {
  return (
    divider() +
    renderEventHeader(event, config, map) +
    divider() +
    getOptionalSummary(event.comments)
  )
}

function renderEventHeader(event: EventModel, config: EventConfigModel, map: ICodebaseMap): string {
  return (
    `### ${event.name} ${renderTypeName(event, event.type, map)}` +
    renderIsStaticTag(event, config) +
    renderVirtualAndStaticTags(event, config)
  )
}
