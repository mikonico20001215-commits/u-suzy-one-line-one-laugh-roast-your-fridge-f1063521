// u-suzy-one-line-one-laugh-roast-your-fridge-f1063521 — one roast of a fridge.
// Gate: /output/entry.txt must hold one line of 1–200 characters of UTF-8 text, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "My fridge hums like a jet engine all night, yet my ice cream is soup and the lettuce froze solid. One job, Kevin. One job.";
const MAX_CHARS = 200;

if (!LINE.trim() || LINE.length > MAX_CHARS || LINE.includes("\n")) {
  throw new Error(`line must be a single line of 1–${MAX_CHARS} characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
