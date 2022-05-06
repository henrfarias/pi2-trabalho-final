import { Router } from 'express'
import doInvestmentFactory from '../../main/do-investment-factory'
import historyListFactory from '../../main/history-list-factory'
import { adaptRoute } from '../adapter/router-adapter'
import { auth } from '../middleware/authenticate'

export default (router: Router): void => {
  router.post('/investment', auth, adaptRoute(doInvestmentFactory()))
  router.get('/history', auth, adaptRoute(historyListFactory()))
}
