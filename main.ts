import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I did finish it — then I autosaved it into a folder called Final_FINAL_v2_REAL and now neither of us can find it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
