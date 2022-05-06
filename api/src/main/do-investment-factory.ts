import DoInvestmentUsecase from '../business/usecase/do-investment'
import DoInvestmentController from '../controller/do-investment'
import PgDatabaseConnection from '../infra/database/pg-database-connection'
import InvestmentRepository from '../infra/repository/investment-repository'
import DateService from '../infra/services/date-service'

export default function doInvestmentFactory(): DoInvestmentController {
  const dateService = new DateService()
  const investmentRepository = new InvestmentRepository(PgDatabaseConnection)
  const doInvestmentUsecase = new DoInvestmentUsecase(
    dateService,
    investmentRepository
  )
  return new DoInvestmentController(doInvestmentUsecase)
}
