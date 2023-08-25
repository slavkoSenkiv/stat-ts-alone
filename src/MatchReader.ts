import { MatchData } from "./MatchData";
import { MatchResult } from "./MatchResult";
import { stringToDate } from "./utils";

export interface DataLoader {
  filename: string;
  data: string[][];
  load(): void;
}

export class MatchReader {
  constructor(public reader: DataLoader) {}
  matches: MatchData[] = [];

  formatData(){
    this.reader.load();
    this.matches = this.reader.data.map(
      (row: string[]) => {
        return [
          stringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult,
          row[6]
        ]
    })
  }
}