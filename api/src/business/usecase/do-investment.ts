import Investment from '../../domain/entity/investment'
import IDateService from '../../domain/service/date-service'
import makeInvestmentObject from '../../shared/utils/make-investment-object'
import {
  IInputDoInvestmentDto,
  IOutputDoInvestmentDto,
} from '../protocol/do-investment'
import IUsecase from '../protocol/usecase'
import IInvestmentRepository from '../repository/investment'

export default class DoInvestmentUsecase
  implements IUsecase<IInputDoInvestmentDto, IOutputDoInvestmentDto>
{
  constructor(
    private dateService: IDateService,
    private investmentRepository: IInvestmentRepository
  ) {}

  async exec(input: IInputDoInvestmentDto): Promise<IOutputDoInvestmentDto> {
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
    const result = makeInvestmentObject(investment, input)
    await this.investmentRepository.save(result, input.userId)
    return result
  }
}
