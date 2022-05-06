import IController from '../business/protocol/controller'
import IHttpResponse from '../business/protocol/httpResponse'
import { IInputSimulationDto } from '../business/protocol/simulation'
import SimulationUsecase from '../business/usecase/simulation'

export default class SimulationController
  implements IController<IInputSimulationDto>
{
  constructor(private simulationUsecase: SimulationUsecase) {}

  async run(input: IInputSimulationDto): Promise<IHttpResponse> {
    const result = await this.simulationUsecase.exec(input)
    return {
      statusCode: 200,
      body: result,
    }
  }
}
