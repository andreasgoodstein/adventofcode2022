import { load } from "../utils/file.ts";

const input = await load("./day1/input.txt");

let sum = 0;
let max = 0;
input.forEach((line) => {
  if (!line) {
    max = Math.max(max, sum);
    sum = 0;
    return;
  }

  sum += parseInt(line, 10);
}, [] as number[]);

console.log(max);
