// deno-lint-ignore-file no-fallthrough
import { load } from "../utils/file.ts";

const SCORE_X = 1;
const SCORE_Y = 2;
const SCORE_Z = 3;

const input = (await load("./day2/input.txt")).map(
  (line) => [line.charAt(0), line.charAt(2)] as [string, string]
);

const getRoundScore = (line: [string, string]) => {
  switch (line[0]) {
    case "A": {
      switch (line[1]) {
        case "X":
          return SCORE_X + 3;
        case "Y":
          return SCORE_Y + 6;
        case "Z":
          return SCORE_Z + 0;
      }
    }

    case "B": {
      switch (line[1]) {
        case "X":
          return SCORE_X + 0;
        case "Y":
          return SCORE_Y + 3;
        case "Z":
          return SCORE_Z + 6;
      }
    }

    case "C": {
      switch (line[1]) {
        case "X":
          return SCORE_X + 6;
        case "Y":
          return SCORE_Y + 0;
        case "Z":
          return SCORE_Z + 3;
      }
    }
  }
};

const results = input.map(getRoundScore);

const sum = results.reduce((sum, result) => sum! + result!, 0);

console.log(sum);
