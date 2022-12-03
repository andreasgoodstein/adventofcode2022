import { load, time } from "../util.ts";

const input = await load("./day1/input.txt");

time(() => {
  let snackSum = 0;
  const topSnackAmount = input
    .reduce<number[]>((acc, line) => {
      if (!line) {
        acc.push(snackSum);
        snackSum = 0;
        return acc;
      }

      snackSum += parseInt(line, 10);
      return acc;
    }, [])
    .sort((a, b) => a - b)
    .reverse()
    .slice(0, 3)
    .reduce((sum, snack) => sum + snack);

  console.log(topSnackAmount);
});
