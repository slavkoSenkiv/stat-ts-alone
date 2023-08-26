export class ConsoleReport {
  constructor(public reportData: string) {}

  run() {
    console.log(`Report says the team won ${this.reportData} times`);
  }
}