import { PATTERN_CATEGORIES } from "./patterns.js";

export interface ScanResult {
  safe: boolean;
  score: number;
  patterns: string[];
}

export interface ScanOptions {
  threshold?: number;
}

export function scan(input: string, options: ScanOptions = {}): ScanResult {
  const { threshold = 0.7 } = options;

  if (!input || typeof input !== "string") {
    return { safe: true, score: 0, patterns: [] };
  }

  const matched: string[] = [];
  let totalScore = 0;

  for (const category of PATTERN_CATEGORIES) {
    const hit = category.regexes.some((regex) => regex.test(input));
    if (hit) {
      matched.push(category.id);
      totalScore += category.weight;
    }
  }

  const score = Math.min(1, totalScore);

  return {
    safe: score < threshold,
    score: Math.round(score * 100) / 100,
    patterns: matched,
  };
}
