import { IInputSimulationDto } from '../../../src/business/protocol/simulation'
import SimulationUsecase from '../../../src/business/usecase/simulation'
import DateService from '../../../src/infra/services/date-service'

describe('Simulation use case', () => {
  test('should return all result`s informations', async () => {
    const input: IInputSimulationDto = {
      name: 'investment-name',
      applicationDate: '2022-01-01T00:00:00.000Z',
      dueDate: '2027-01-01T00:00:00.000Z',
      annualInterest: 5,
      monthlyContribution: 500,
      initialValue: 10000,
    }
    const sut = new SimulationUsecase(new DateService())
    const result = await sut.exec(input)
    expect(result).toEqual({
      name: 'investment-name',
      applicationDate: '2022-01-01T00:00:00.000Z',
      dueDate: '2027-01-01T00:00:00.000Z',
      annualInterest: 5,
      monthlyContribution: 500,
      initialValue: 10000,
      withdraw: 46765.86,
    })
  })
})
