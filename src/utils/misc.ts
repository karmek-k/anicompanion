export function capitalizeString(s: string): string {
  return s.toLowerCase().replace(/^\w/, c => c.toUpperCase());
}

export function replaceBr(source: string, characterToInsert: string) {
  return source.replaceAll(/<br( ?\/)?>/g, characterToInsert);
}
