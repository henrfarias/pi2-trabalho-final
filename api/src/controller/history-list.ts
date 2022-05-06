import IController from '../business/protocol/controller'
import { IInputHistoryList } from '../business/protocol/history-list';
import IHttpResponse from '../business/protocol/httpResponse';
import InvestmentQuery from '../infra/query/investment';

export default class HistoryListController implements IController {
  constructor(private investmentQuery: InvestmentQuery) {}
  
  async run(input: IInputHistoryList): Promise<IHttpResponse> {
    const result = await this.investmentQuery.list(input.userId)
    return { statusCode: 200, body: { history: result }}
  }
}
