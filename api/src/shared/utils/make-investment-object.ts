import { IInputSimulationDto } from '../../business/protocol/simulation'
import Investment from '../../domain/entity/investment'

const makeInvestmentObject = (
  investment: Investment,
  input: IInputSimulationDto
) => ({
  name: input.name,
  initialValue: investment.initialValue,
  annualInterest: input.annualInterest,
  applicationDate: investment.applicationDate.toISOString(),
  dueDate: investment.dueDate.toISOString(),
  withdraw: investment.simulate(input.monthlyContribution),
  monthlyContribution: input.monthlyContribution
    ? input.monthlyContribution
    : null,
})

export default makeInvestmentObject
