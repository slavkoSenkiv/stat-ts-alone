import fs from 'fs';
import { ReportFormat } from '../Summary';

export class HtmlReport implements ReportFormat{
  constructor(public reportData: string | number) {}

  run(): void {
    let reportString: string = `
    <h1>Here is the report: </h1>
    <p>
      ${this.reportData}</br>
      For more info subscribe <a href="https://www.google.com/">here</a>
    <p>
    `
    fs.writeFileSync('report.html', reportString);
  }

}
