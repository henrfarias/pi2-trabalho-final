import { IOutputSimulationDto } from '../../../src/business/protocol/simulation'
import IInvestmentRepository from '../../../src/business/repository/investment'

export default class FakeInvestmentRepository implements IInvestmentRepository {
  save(_input: IOutputSimulationDto, _userId: number): Promise<void> {
    return void 0
  }
}
