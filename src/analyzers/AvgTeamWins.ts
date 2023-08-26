import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";
import { Analyzer } from "../Summary";

export class AvgTeamWins implements Analyzer{
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let teamScores: number = 0;
    let teamMatches: number = 0;
    for (let match of matches){
      if (match[1] === this.team && match[5] === MatchResult.HomeWin){
        teamScores += match[3];
        teamMatches += 1;
      } else if (match[2] === this.team && match[5] === MatchResult.AwayWin) {
        teamScores += match[4];
        teamMatches += 1;
      }
    }
    let avgScore = Math.floor(teamScores/teamMatches);
    return `The Avg goal score for ${this.team} team is ${avgScore} scores per match`;
  }

}