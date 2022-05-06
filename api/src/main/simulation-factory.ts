import SimulationController from '../controller/simulation'
import SimulationUsecase from '../business/usecase/simulation'
import DateService from '../infra/services/date-service'

export default function simulationFactory(): SimulationController {
  const dateService = new DateService()
  const simulationUsecase = new SimulationUsecase(dateService)
  return new SimulationController(simulationUsecase)
}
