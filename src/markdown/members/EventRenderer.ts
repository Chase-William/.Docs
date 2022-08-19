import EventConfigModel from "../../models/config/members/EventConfigModel"
import IAmEventModel from "../../models/language/interfaces/members/IAmEventModel"
import IAmSlicedTypeModel from "../../models/language/interfaces/types/IAmSlicedTypeModel"
import RenderMembersArgs from "../../rendering/RenderMembersArgs"
import { getOptionalSummary } from "../CommentsRenderer"
import divider, { renderIsStaticTag, renderVirtualAndStaticTags } from "../Util"

export function renderEvent(event: IAmEventModel, args: RenderMembersArgs<IAmSlicedTypeModel, IAmEventModel, EventConfigModel>): string {
  return (
    divider() +
    renderEventHeader(event, args) +
    divider() +
    getOptionalSummary(event.comments)
  )
}

function renderEventHeader(event: IAmEventModel, args: RenderMembersArgs<IAmSlicedTypeModel, IAmEventModel, EventConfigModel>): string {
  return (
    `### ${event.name}` +
    renderIsStaticTag(event, args.config) +
    renderVirtualAndStaticTags(event, args.config)
  )
}
