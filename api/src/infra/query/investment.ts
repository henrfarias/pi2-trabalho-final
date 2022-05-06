import IInvestmentQuery from "../../business/query/investment";
import IHistoryRow from "../../domain/interface/history";
import IDatabaseConnection from "../database/database-connection";

export default class InvestmentQuery implements IInvestmentQuery {
  constructor(private dbConn: IDatabaseConnection) {}

  async list(userId: number): Promise<IHistoryRow[]> {
    const historyData = await this.dbConn.query(`SELECT * FROM web_prog.history WHERE user_id=$1`, [userId])
    const historyList = []
    for (const historyRow of historyData) {
      historyList.push({
        userId: historyRow.user_id,
        investmentId: historyRow.investment_id,
        name: historyRow.name,
        initialValue: historyRow.initial_value,
        finalValue: historyRow.final_value,
        dateOut: historyRow.date_out,
      })
    }
    return historyList
  }

}