import { MatchResult } from "../MatchResult";
import { Analyzer } from "../Summary";
import { MatchData } from "../MatchData";

export class TotalTeamWins implements Analyzer{
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let totalTeamWins: number = 0;
    for (let match of matches){
      if (match[1] === this.team && match[5] === MatchResult.HomeWin){
        totalTeamWins ++;
      } else if (match[2] === this.team && match[5] === MatchResult.AwayWin) {
        totalTeamWins ++;
      }
    }
    return `Team ${this.team} won ${totalTeamWins} games`;
  }

}