import { ReportFormat } from "../Summary";

export class ConsoleReport implements ReportFormat {
  constructor(public reportData: string | number) {}

  run(): void {
    console.log(`Report says the team won ${this.reportData} times`);
  }
}