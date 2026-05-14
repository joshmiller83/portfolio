export function smartquotes(str: string): string {
  // Normalize any existing curly quotes to straight ASCII so the
  // conversion below starts from a known baseline (catches prior
  // mass-replacements that put right-curly in opening positions).
  let s = str
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"');

  // Double quotes — opening: preceded by whitespace / start / open bracket
  s = s.replace(/(^|[\s([{])"(?=\S)/g, '$1“');
  // Double quotes — closing: followed by whitespace / end / punctuation
  s = s.replace(/"(?=[\s)\]},.:;!?]|$)/g, '”');
  // Any remaining double quotes → closing (catches mid-string edge cases)
  s = s.replace(/"/g, '”');

  // Apostrophes between word characters (it's, don't, …)
  s = s.replace(/(\w)'(\w)/g, '$1’$2');
  // Opening single quotes: preceded by whitespace / start / open bracket
  s = s.replace(/(^|[\s([{])'(?=\S)/g, '$1‘');
  // Closing single quotes: followed by whitespace / end / punctuation
  s = s.replace(/'(?=[\s)\]},.:;!?]|$)/g, '’');
  // Any remaining single quotes → closing/apostrophe
  s = s.replace(/'/g, '’');

  return s;
}
