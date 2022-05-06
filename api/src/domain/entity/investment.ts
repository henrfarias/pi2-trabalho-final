import precise from '../../shared/utils/precise'
import { IInputInvestmentEntity } from '../interface/investment'
import IDateService from '../service/date-service'

export default class Investment {
  readonly initialValue: number
  readonly annualInterest: number
  readonly applicationDate: Date
  readonly dueDate: Date

  constructor(
    input: IInputInvestmentEntity,
    private dateService: IDateService
  ) {
    this.dateService.init(input.applicationDate, input.dueDate)
    if (this.dateService.isInvalidRangeOfDate())
      throw new Error('Invalid range of date')
    this.initialValue = input.initialValue
    this.annualInterest = input.annualInterest / 100
    this.applicationDate = input.applicationDate
    this.dueDate = input.dueDate
  }

  public simulate(monthlyContribution?: number): number {
    let result = this.calcFinalAmount()
    if (monthlyContribution) {
      result += this.calcFutureValue(monthlyContribution)
    }
    return result
  }

  private calcFinalAmount(): number {
    return precise(
      this.initialValue *
        (1 + this.annualInterest) ** this.dateService.timeInYears()
    )
  }

  private calcFutureValue(monthlyContribution: number): number {
    return precise(
      (monthlyContribution *
        ((1 + this.monthlyInterest()) ** this.dateService.timeInMonths() - 1)) /
        this.monthlyInterest()
    )
  }

  private monthlyInterest(): number {
    const monthlyInterest =
      this.annualInterest / this.dateService.MONTHS_IN_ONE_YEAR
    return monthlyInterest
  }
}
