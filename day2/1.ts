// deno-lint-ignore-file no-fallthrough
import { load, time } from "../util.ts";

const input = (await load("./day2/input.txt")).map(
  (line) => [line.charAt(0), line.charAt(2)] as [string, string]
);

time(() => {
  const SCORE_ROCK = 1;
  const SCORE_PAPER = 2;
  const SCORE_SCISSOR = 3;

  const getRoundScore = (line: [string, string]) => {
    switch (line[0]) {
      case "A": {
        switch (line[1]) {
          case "X":
            return SCORE_ROCK + 3;
          case "Y":
            return SCORE_PAPER + 6;
          case "Z":
            return SCORE_SCISSOR + 0;
        }
      }

      case "B": {
        switch (line[1]) {
          case "X":
            return SCORE_ROCK + 0;
          case "Y":
            return SCORE_PAPER + 3;
          case "Z":
            return SCORE_SCISSOR + 6;
        }
      }

      case "C": {
        switch (line[1]) {
          case "X":
            return SCORE_ROCK + 6;
          case "Y":
            return SCORE_PAPER + 0;
          case "Z":
            return SCORE_SCISSOR + 3;
        }
      }
    }
  };

  const results = input.map(getRoundScore);

  const sum = results.reduce((sum, result) => sum! + result!, 0);

  console.log(sum);
});
