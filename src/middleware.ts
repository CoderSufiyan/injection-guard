import { scan, ScanResult } from "./scanner.js";

export interface MiddlewareOptions {
  threshold?: number;
  field?: string;
  onDetected?: (result: ScanResult, req: any, res: any) => void;
}

export function middleware(options: MiddlewareOptions = {}) {
  const {
    threshold = 0.7,
    field = "body.message",
    onDetected,
  } = options;

  return (req: any, res: any, next: () => void) => {
    const value = getField(req, field);

    if (!value || typeof value !== "string") {
      return next();
    }

    const result = scan(value, { threshold });

    if (!result.safe) {
      if (onDetected) {
        return onDetected(result, req, res);
      }
      return res.status(400).json({
        error: "Prompt injection detected",
        patterns: result.patterns,
        score: result.score,
      });
    }

    next();
  };
}

function getField(obj: any, path: string): unknown {
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
}
