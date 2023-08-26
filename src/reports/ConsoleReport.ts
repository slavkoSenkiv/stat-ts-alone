import { ReportFormat } from "../Summary";

export class ConsoleReport implements ReportFormat {

  run(reportData: string): void {
    console.log(`Report says the team won ${reportData} times`);
  }
}