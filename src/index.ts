import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const reader = MatchReader.fromCsv('football');
reader.formatData();

const summary = Summary.analyzeTotalWinsAndConsolLog('Man United');
summary.runAndBuildReport(reader.matches);