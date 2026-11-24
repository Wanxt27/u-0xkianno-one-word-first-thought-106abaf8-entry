// One Word, First Thought — make.fun entry.
// Writes exactly one word to /output/entry.txt: the first word that
// came to mind. Node 22, stdlib only.
import { mkdir, writeFile } from "node:fs/promises";

const WORD = "defenestration";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 24 characters,
// not only white space, and exactly one word. Fail loudly instead of
// writing an invalid entry.
if (!/^\S{1,24}$/.test(WORD)) {
  throw new Error(`entry word fails the gate: ${JSON.stringify(WORD)}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
await mkdir(outDir, { recursive: true });
await writeFile(`${outDir}/entry.txt`, WORD, "utf8");
