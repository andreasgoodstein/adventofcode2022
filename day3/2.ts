import { load, time } from "../util.ts";
import { getLetterPriority } from "./util3.ts";

const input = await load("./day3/input.txt");

time(() => {
  const getGroupLetter = (group: Array<string>) => {
    const setTwo = new Set(group[1]);
    const setThree = new Set(group[2]);

    return Array.from(group[0]).filter(
      (letter) => setTwo.has(letter) && setThree.has(letter)
    )[0];
  };

  const groupList = input.reduce<Array<Array<string>>>(
    (groups, line, index) => {
      const divisor = Math.floor(index / 3);
      if (groups.length <= divisor) {
        groups.push([]);
      }

      groups[divisor].push(line);

      return groups;
    },
    []
  );

  const groupLetterList = groupList.map(getGroupLetter);

  const groupPrioritySum = groupLetterList.reduce(
    (sum, letter) => sum + getLetterPriority(letter),
    0
  );

  console.log(groupPrioritySum);
});
