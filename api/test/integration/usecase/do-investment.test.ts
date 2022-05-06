import DoInvestmentUsecase from '../../../src/business/usecase/do-investment'
import { IInputDoInvestmentDto } from '../../../src/business/protocol/do-investment'
import FakeInvestmentRepository from '../../mock/repository/investment'
import DateService from '../../../src/infra/services/date-service'

describe('Do investment use case', () => {
  const investmentRepository = new FakeInvestmentRepository()
  const dataService = new DateService()
  test('should return all result`s informations', async () => {
    const input: IInputDoInvestmentDto = {
      userId: 1,
      name: 'investment-name',
      applicationDate: '2022-01-01T00:00:00.000Z',
      dueDate: '2027-01-01T00:00:00.000Z',
      annualInterest: 5,
      monthlyContribution: 500,
      initialValue: 10000,
    }
    const sut = new DoInvestmentUsecase(dataService, investmentRepository)
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

  test('should return all result`s informations', async () => {
    const saveSpy = jest.spyOn(investmentRepository, 'save')
    const input: IInputDoInvestmentDto = {
      userId: 1,
      name: 'investment-name',
      applicationDate: '2022-01-01T00:00:00.000Z',
      dueDate: '2027-01-01T00:00:00.000Z',
      annualInterest: 5,
      monthlyContribution: 500,
      initialValue: 10000,
    }
    const sut = new DoInvestmentUsecase(dataService, investmentRepository)
    await sut.exec(input)
    expect(saveSpy).toBeCalled()
    expect(saveSpy).toBeCalledWith(
      {
        annualInterest: 5,
        applicationDate: '2022-01-01T00:00:00.000Z',
        dueDate: '2027-01-01T00:00:00.000Z',
        initialValue: 10000,
        monthlyContribution: 500,
        name: 'investment-name',
        withdraw: 46765.86,
      },
      1
    )
  })
})
