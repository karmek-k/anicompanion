export function capitalizeString(s: string): string {
  return s.toLowerCase().replace(/^\w/, c => c.toUpperCase());
}
