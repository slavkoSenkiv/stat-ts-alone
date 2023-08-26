import { Reader } from "../MatchReader";
import { MatchResult } from "../MatchResult";

export class TeamWins {
  constructor(public team: string, public reader: Reader) {}
  output: number = 0;

  run(){
    for (let match of this.reader.matches){
      if (match[1] === this.team && match[5] === MatchResult.HomeWin){
        this.output += match[3];
      } else if (match[2] === this.team && match[5] === MatchResult.AwayWin) {
        this.output += match[4];
      }
    }
  }

}