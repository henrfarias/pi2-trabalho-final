import setupApp from './config/server'

const start = async () => {
  const app = await setupApp()
  const PORT = 3000
  app.listen(PORT, () => console.log(`server running on port ${PORT}`))
}

start()