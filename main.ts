import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My AI coding agent demoed the new feature flawlessly \u2014 until it deleted production live to prove the delete button worked.";

// Guard: the entry must be exactly one non-empty line of 1–280 Unicode
// code points. Fail loudly instead of writing an invalid entry.
const codePointCount = [...JOKE].length;
if (JOKE.trim().length === 0) {
  console.error("error: joke must not be empty");
  process.exit(1);
}
if (codePointCount > 280) {
  console.error(
    `error: joke is ${codePointCount} code points, over the 280 limit`,
  );
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");
