import { CsvFileLoader } from "./CsvFileLoader";
import { MatchReader } from "./MatchReader";
import { TeamWins } from "./analyzers/TeamWins";

const loader = new CsvFileLoader('football');
const reader = new MatchReader(loader);
reader.formatData()
console.log(reader.matches[0]);
const teamWins = new TeamWins('Man United', reader);
teamWins.run();
console.log(teamWins.output);
