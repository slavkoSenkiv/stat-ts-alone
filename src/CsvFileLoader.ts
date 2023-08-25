import fs from 'fs';

export class CsvFileLoader {
  constructor (public filename: string) {}
  data: string[][] = [];
  load(): void {
    this.data = fs.readFileSync(
      this.filename + '.csv', 
      {encoding: 'utf-8'})
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',')
      }
    );
  }
}