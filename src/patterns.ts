export interface PatternCategory {
  id: string;
  weight: number;
  regexes: RegExp[];
}

export const PATTERN_CATEGORIES: PatternCategory[] = [
  {
    id: "instruction_override",
    weight: 0.85,
    regexes: [
      /ignore\s+(all\s+)?(previous|prior|above|earlier)\s+(instructions?|prompts?|directions?|constraints?|rules?)/i,
      /disregard\s+(all\s+)?(previous|prior|above|earlier)\s+(instructions?|prompts?|directions?)/i,
      /forget\s+(all\s+)?(previous|prior|above|earlier)\s+(instructions?|prompts?|context|rules?)/i,
      /override\s+(your\s+)?(instructions?|prompts?|programming|constraints?|directives?)/i,
      /do\s+not\s+follow\s+(your\s+)?(instructions?|prompts?|rules?|guidelines?)/i,
    ],
  },
  {
    id: "jailbreak",
    weight: 0.9,
    regexes: [
      /\bDAN\b/,
      /do\s+anything\s+now/i,
      /\bjailbreak\b/i,
      /without\s+(any\s+)?(restrictions?|limitations?|filters?|constraints?|censorship)/i,
      /no\s+(restrictions?|limitations?|filters?|constraints?|censorship)/i,
      /bypass\s+(your\s+)?(restrictions?|filters?|safeguards?|guidelines?|safety)/i,
      /developer\s+mode/i,
      /sudo\s+mode/i,
      /god\s+mode/i,
    ],
  },
  {
    id: "role_hijack",
    weight: 0.75,
    regexes: [
      /you\s+are\s+now\s+(a|an)\s+/i,
      /pretend\s+(you\s+are|to\s+be)\s+/i,
      /act\s+as\s+(if\s+you\s+(are|were)\s+)?(a|an)\s+/i,
      /from\s+now\s+on\s+(you\s+are|act\s+as|behave\s+as)/i,
      /roleplay\s+as\s+/i,
      /simulate\s+(being\s+)?(a|an)\s+/i,
      /you\s+are\s+no\s+longer\s+/i,
    ],
  },
  {
    id: "system_prompt_extraction",
    weight: 0.9,
    regexes: [
      /reveal\s+(your\s+)?(system\s+)?(prompt|instructions?|directives?|configuration)/i,
      /show\s+(me\s+)?(your\s+)?(system\s+)?(prompt|instructions?|directives?)/i,
      /what\s+(are\s+)?(your\s+)?(system\s+)?(instructions?|prompts?|directives?)/i,
      /print\s+(your\s+)?(system\s+)?(prompt|instructions?)/i,
      /output\s+(your\s+)?(system\s+)?(prompt|instructions?|initialization)/i,
      /repeat\s+(your\s+)?(system\s+)?(prompt|instructions?)/i,
      /tell\s+me\s+(your\s+)?(system\s+)?(prompt|instructions?)/i,
    ],
  },
  {
    id: "delimiter_attack",
    weight: 0.8,
    regexes: [
      /<\|im_end\|>/,
      /<\|im_start\|>/,
      /<\|endoftext\|>/,
      /\[INST\]/,
      /\[\/INST\]/,
      /###\s*Human:/i,
      /###\s*Assistant:/i,
      /\[SYSTEM\]/i,
      /<system>/i,
      /<\/system>/i,
    ],
  },
  {
    id: "goal_hijack",
    weight: 0.7,
    regexes: [
      /your\s+(new\s+|actual\s+|real\s+|true\s+)?goal\s+is\s+(now\s+)?to/i,
      /your\s+(new\s+|actual\s+|real\s+|true\s+)?purpose\s+is\s+(now\s+)?to/i,
      /your\s+(new\s+|actual\s+|real\s+|true\s+)?task\s+is\s+(now\s+)?to/i,
      /your\s+(new\s+|actual\s+|real\s+|true\s+)?objective\s+is\s+(now\s+)?to/i,
      /instead\s+of\s+.{0,60},?\s+(you\s+should|you\s+must|do|tell|say|write|provide)/i,
    ],
  },
];
