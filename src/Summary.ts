import { MatchData } from "./MatchData";
import { TotalTeamWins } from "./analyzers/TotalTeamWins";
import { AvgTeamWins } from "./analyzers/AvgTeamWins";
import { HtmlReport } from "./reports/HtmlReport";
import { ConsoleReport } from "./reports/ConsoleReport";

export interface Analyzer {
  team: string;
  run(matches: MatchData[]): string;
}

export interface ReportFormat {
  run(reportData: string): void;
}

export class Summary {

  static analyzeTotalWinsAndConsolLog(team: string): Summary {
    return new Summary (
      new TotalTeamWins(team),
      new ConsoleReport()
    );
  }

  constructor(
    public analyzer: Analyzer, 
    public reportFormat: ReportFormat
  ) {}

  runAndBuildReport(matches: MatchData[]): void {
    let output = this.analyzer.run(matches);
    this.reportFormat.run(output);
  }
}