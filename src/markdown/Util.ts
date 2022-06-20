export default function divider(): string {
  return '\n\n'
}

export function check(col: unknown[]): boolean {
  return !col || !col.length
}
