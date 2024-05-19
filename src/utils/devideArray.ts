import { TDataUnit } from "../types";

export const devideArray = (arr: TDataUnit[]): [TDataUnit[], TDataUnit[]] => {
  const part1 = arr.length === 1 ? arr : arr.slice(0, arr.length / 2);
  const part2 = arr.length === 1 ? [] : arr.slice(arr.length / 2);

  return [part1, part2];
};
