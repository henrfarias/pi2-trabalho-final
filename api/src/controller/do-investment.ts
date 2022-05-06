import IController from '../business/protocol/controller'
import { IInputDoInvestmentDto } from '../business/protocol/do-investment'
import IHttpResponse from '../business/protocol/httpResponse'
import DoInvestmentUsecase from '../business/usecase/do-investment'

export default class DoInvestmentController
  implements IController<IInputDoInvestmentDto>
{
  constructor(private doInvestmentUsecase: DoInvestmentUsecase) {}

  async run(input: IInputDoInvestmentDto): Promise<IHttpResponse> {
    const result = await this.doInvestmentUsecase.exec(input)
    return {
      statusCode: 200,
      body: result,
    }
  }
}
