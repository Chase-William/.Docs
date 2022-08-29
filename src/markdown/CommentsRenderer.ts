import CommonComment from "../models/comments/CommonComment"

export default function hasSummaryAndComment(comments: CommonComment | null): boolean {
  return !!(comments && comments?.summary)
}

export function getOptionalSummary(comments: CommonComment) {
  if (!comments) {
    return ''
  }
  if (comments.summary) {
    return comments.summary
  }
  return ''
}