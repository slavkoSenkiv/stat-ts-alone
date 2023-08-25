import { CsvFileLoader } from "./CsvFileLoader";
import { MatchReader } from "./MatchReader";

const loader = new CsvFileLoader('football');
const reader = new MatchReader(loader);
reader.formatData()
console.log(reader.matches);
