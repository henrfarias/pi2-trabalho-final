import Investment from '../../domain/entity/investment'
import IDateService from '../../domain/service/date-service'
import makeInvestmentObject from '../../shared/utils/make-investment-object'
import {
  IInputSimulationDto,
  IOutputSimulationDto,
} from '../protocol/simulation'
import IUsecase from '../protocol/usecase'

export default class SimulationUsecase
  implements IUsecase<IInputSimulationDto, IOutputSimulationDto>
{
  constructor(private dateService: IDateService) {}

  async exec(input: IInputSimulationDto): Promise<IOutputSimulationDto> {
    const investment = new Investment(
      {
        name: input.name,
        initialValue: +input.initialValue,
        annualInterest: +input.annualInterest,
        applicationDate: new Date(input.applicationDate),
        dueDate: new Date(input.dueDate),
      },
      this.dateService
    )
    return makeInvestmentObject(investment, input)
  }
}
