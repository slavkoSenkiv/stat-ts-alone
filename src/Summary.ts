import { MatchReader, Reader } from "./MatchReader";

export interface Analyzer {
  output: string;
  reader: Reader;
  run(): void;
}
export interface ReportFormat {
  run(): void;
}

export class Summary {
  constructor(
    public team: string,
    public analyzer: Analyzer, 
    public reportFormat: ReportFormat,
    public reader: Reader
  ) {}


  runAndBuildReport(){
    this.analyzer.run();
    this.reportFormat.run();
  }
}