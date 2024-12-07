import {input} from "./07.input.ts";


const calc = (search: number, current: number, [next, ...rest]: number[])=>{
    if (next === undefined) {
        return current === search;
    }

    if (current > search) return false;

    return calc(search, current + next, rest)
        || calc(search, current * next, rest);
}

const sum = input.trim().split("\n").map((line) => {
    const [result, rest] = line.split(": ");
    const [first, ...list] = rest.split(" ").map(Number);
    const search = Number(result);

    return calc(search, first, list) ? search : 0;
}).reduce((acc, value) => acc + value, 0);

console.log(sum);

