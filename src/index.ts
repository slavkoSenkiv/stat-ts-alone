import { CsvFileLoader } from "./CsvFileLoader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { AvgTeamWins } from "./analyzers/AvgTeamWins";
import { ConsoleReport } from "./reports/ConsoleReport";
/* import { TotalTeamWins } from "./analyzers/TotalTeamWins";
import { HtmlReport } from "./reports/HtmlReport"; */

const loader = new CsvFileLoader('football');
const reader = new MatchReader(loader);
reader.formatData()

//const analyzer = new TotalTeamWins('Man United', reader);
//const reportFormat = new HtmlReport(analyzer.run());
const analyzer = new AvgTeamWins('Man United');
const reportFormat = new ConsoleReport();


const summary = new Summary(analyzer, reportFormat);
summary.runAndBuildReport(reader.matches);