import { MatchReader, Reader } from "./MatchReader";

export interface Analyzer {
  team: string;
  reader: Reader;
  run(): number;
}

export interface ReportFormat {
  reportData: string | number;
  run(): void;
}

export class Summary {
  constructor(
    public analyzer: Analyzer, 
    public reportFormat: ReportFormat) {}


  runAndBuildReport(){
    this.analyzer.run();
    this.reportFormat.run();
  }
}