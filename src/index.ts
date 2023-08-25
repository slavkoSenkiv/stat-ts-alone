import { CsvFileLoader } from "./CsvFileLoader";

const loader = new CsvFileLoader('football');
loader.load();
console.log(loader.data);