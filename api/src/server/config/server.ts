import express, { Express, json } from 'express'
import cors from 'cors'
import setupRoutes from './routes'

const setupApp = async (): Promise<Express> => {
  const app = express()
  app.use(json())
  app.use(cors())
  await setupRoutes(app)
  return app
}

export default setupApp 