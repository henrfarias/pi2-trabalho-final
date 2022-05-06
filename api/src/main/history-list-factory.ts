import HistoryListController from "../controller/history-list";
import PgDatabaseConnection from "../infra/database/pg-database-connection";
import InvestmentQuery from "../infra/query/investment";

export default function historyListFactory(): HistoryListController {
  const investmentQuery = new InvestmentQuery(PgDatabaseConnection)
  return new HistoryListController(investmentQuery)
}