import { MatchData } from "./MatchData";

export interface Analyzer {
  team: string;
  run(matches: MatchData[]): string;
}

export interface ReportFormat {
  run(reportData: string): void;
}

export class Summary {
  constructor(
    public analyzer: Analyzer, 
    public reportFormat: ReportFormat
  ) {}

  runAndBuildReport(matches: MatchData[]): void {
    let output = this.analyzer.run(matches);
    this.reportFormat.run(output);
  }
}