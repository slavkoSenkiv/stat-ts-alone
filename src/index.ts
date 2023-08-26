import { CsvFileLoader } from "./CsvFileLoader";
import { MatchReader } from "./MatchReader";
import { TotalTeamWins } from "./analyzers/TotalTeamWins";
import { AvgTeamWins } from "./analyzers/AvgTeamWins";
import { Summary } from "./Summary";
import { ConsoleReport } from "./reports/ConsoleReport";
import { HtmlReport } from "./reports/HtmlReport";

const loader = new CsvFileLoader('football');
const reader = new MatchReader(loader);
reader.formatData()
//const analyzer = new TotalTeamWins('Man United', reader);
const analyzer = new AvgTeamWins('Man United', reader);
const reportFormat = new ConsoleReport(analyzer.run());
//const reportFormat = new HtmlReport(analyzer.run());


const summary = new Summary(analyzer, reportFormat);
summary.runAndBuildReport();