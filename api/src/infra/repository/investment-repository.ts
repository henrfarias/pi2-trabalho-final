import { IOutputSimulationDto } from '../../business/protocol/simulation'
import IInvestmentRepository from '../../business/repository/investment'
import IDatabaseConnection from '../database/database-connection'

export default class InvestmentRepository implements IInvestmentRepository {
  constructor(private databaseConn: IDatabaseConnection) {}

  async save(input: IOutputSimulationDto, userId: number): Promise<void> {
    const [investment] = await this.databaseConn.query(
      `INSERT INTO web_prog.investment (name, value, monthly_contribution, rentability, date_in, date_out) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`,
      [
        input.name,
        input.initialValue,
        input.monthlyContribution,
        input.annualInterest,
        input.applicationDate,
        input.dueDate,
      ]
    )
    await this.databaseConn.query(
      `INSERT INTO web_prog.history (user_id, investment_id, name, initial_value, final_value, date_out) VALUES ($1, $2, $3, $4, $5, $6)`,
      [userId, investment.id, input.name, input.initialValue, input.withdraw, input.dueDate]
    )
  }
}
