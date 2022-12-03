import { load, time } from "../util.ts";

const input = await load("./day3/input.txt");

time(() => {
  const getLetterPriority = (letter: string) => {
    if (!letter) {
      return 0;
    }

    const charCode = letter.charCodeAt(0);

    return charCode < 97 ? charCode - 38 : charCode - 96;
  };

  const findDuplicateLetter = (line: string) => {
    const firstHalfMap: Record<string, boolean> = {};
    const secondHalfMap: Record<string, boolean> = {};

    const lineLengthHalf = line.length / 2;

    for (let n = 0; n <= lineLengthHalf; n += 1) {
      if (secondHalfMap[line.charAt(n)]) {
        return line.charAt(n);
      }

      firstHalfMap[line.charAt(n)] = true;

      if (firstHalfMap[line.charAt(n + lineLengthHalf)]) {
        return line.charAt(n + lineLengthHalf);
      }

      secondHalfMap[line.charAt(n + lineLengthHalf)] = true;
    }

    return "";
  };

  const duplicateLetterList = input.map(findDuplicateLetter);

  const letterPrioritySum = duplicateLetterList.reduce(
    (sum, letter) => sum + getLetterPriority(letter),
    0
  );

  console.log(letterPrioritySum);
});
