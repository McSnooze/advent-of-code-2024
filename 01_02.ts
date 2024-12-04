import { input } from "./01.input.ts";

const lines = input.trim().split("\n");

const list = lines.map((line) => Number(line.split("   ")[0]));
const counts = lines.map((line) => Number(line.split("   ")[1])).reduce(
  (acc, value) => acc.set(value, (acc.get(value) ?? 0) + 1),
  new Map<number, number>(),
);

const result = list.reduce(
  (acc, value) => acc + (counts.get(value) ?? 0) * value,
  0,
);

console.log(result);
