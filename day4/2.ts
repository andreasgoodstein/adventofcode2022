import { load, time } from "../util.ts";

const input = await load("./day4/sample.txt");

time(() => {
  const isRangePairOverlapping = (line: string) => {
    const [firstRange, secondRange] = line
      .split(",")
      .map((range) => range.split("-").map((number) => parseInt(number, 10)));

    return (
      (firstRange[0] <= secondRange[1] && firstRange[1] >= secondRange[0]) ||
      (secondRange[0] <= firstRange[1] && secondRange[1] >= firstRange[0])
    );
  };

  console.log(input.filter(isRangePairOverlapping).length);
});
