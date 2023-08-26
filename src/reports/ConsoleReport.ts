import { ReportFormat } from "../Summary";

export class ConsoleReport implements ReportFormat {

  run(reportData: string): void {
    console.log(reportData);
  }
}