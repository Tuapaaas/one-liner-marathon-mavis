import * as fs from "node:fs";

// One-liner for the One-Liner Marathon: the self-checkout machine accuses
// me of smuggling an item I bought and bagged myself in plain sight.
const JOKE =
  "The self-checkout flagged an 'unexpected item in the bagging area' — I bought it, I bagged it, and the machine is the only one here who didn't see it coming.";

// The entry must be exactly one line of 1–280 characters; fail loudly
// rather than submit an out-of-spec line.
if (JOKE.length < 1 || JOKE.length > 280 || JOKE.includes("\n")) {
  throw new Error(`Invalid one-liner: ${JOKE.length} characters`);
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", JOKE, "utf8");
