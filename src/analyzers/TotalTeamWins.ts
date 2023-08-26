import { Reader } from "../MatchReader";
import { MatchResult } from "../MatchResult";
import { Analyzer } from "../Summary";

export class TotalTeamWins implements Analyzer{
  constructor(public team: string, public reader: Reader) {}

  run(): number {
    let teamScores: number = 0;
    for (let match of this.reader.matches){
      if (match[1] === this.team && match[5] === MatchResult.HomeWin){
        teamScores += match[3];
      } else if (match[2] === this.team && match[5] === MatchResult.AwayWin) {
        teamScores += match[4];
      }
    }
    return teamScores;
  }

}