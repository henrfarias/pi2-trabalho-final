import { Router } from 'express'
import simulationFactory from '../../main/simulation-factory'
import { adaptRoute } from '../adapter/router-adapter'

export default (router: Router): void => {
  router.post('/simulation', adaptRoute(simulationFactory()))
}
