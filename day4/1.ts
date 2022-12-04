import { load, time } from "../util.ts";

const input = await load("./day4/input.txt");

time(() => {
  const isRangePairContaining = (line: string) => {
    const [firstRange, secondRange] = line
      .split(",")
      .map((range) => range.split("-").map((number) => parseInt(number, 10)));

    return (
      (firstRange[0] <= secondRange[0] && firstRange[1] >= secondRange[1]) ||
      (secondRange[0] <= firstRange[0] && secondRange[1] >= firstRange[1])
    );
  };

  console.log(input.filter(isRangePairContaining).length);
});
