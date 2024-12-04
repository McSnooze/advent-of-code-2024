import { input } from "./01.input.ts";

const lines = input.trim().split("\n");

const firstArray = lines.map((line) => Number(line.split("   ")[0])).sort();
const secondArray = lines.map((line) => Number(line.split("   ")[1])).sort();

const result = firstArray.reduce(
  (acc, value, index) => acc + Math.abs(value - secondArray[index]),
  0,
);

console.log(result);
