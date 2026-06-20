import { PATTERN_CATEGORIES } from "./patterns.js";

export interface SanitizeOptions {
  replacement?: string;
}

export function sanitize(input: string, options: SanitizeOptions = {}): string {
  const { replacement = "[FILTERED]" } = options;

  if (!input || typeof input !== "string") return input;

  let result = input;

  for (const category of PATTERN_CATEGORIES) {
    for (const regex of category.regexes) {
      const globalRegex = new RegExp(regex.source, regex.flags.includes("g") ? regex.flags : regex.flags + "g");
      result = result.replace(globalRegex, replacement);
    }
  }

  return result;
}
