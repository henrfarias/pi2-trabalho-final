import IHistoryRow from "../../domain/interface/history";

export default interface IInvestmentQuery {
  list(userId: number): Promise<IHistoryRow[]>
}