import { MatchData } from "./MatchData";
import { MatchResult } from "./MatchResult";
import { stringToDate } from "./utils";

export interface DataLoader {
  filename: string;
  data: string[][];
  load(): void;
}

export interface Reader {
  loader: DataLoader,
  matches: MatchData[],
  formatData(): void
}

export class MatchReader implements Reader{
  constructor(public loader: DataLoader) {}
  matches: MatchData[] = [];

  formatData(): void {
    this.loader.load();
    this.matches = this.loader.data.map(
      (row: string[]): MatchData => {
        return [
          stringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult,
          row[6]
        ];
      }
    )
  }
}