import LoginUsecase from '../business/usecase/login'
import LoginController from '../controller/login'
import PgDatabaseConnection from '../infra/database/pg-database-connection'
import UserRepository from '../infra/repository/user-repository'
import BcryptHasher from '../infra/services/bcrypt-hasher'
import JWTAuthenticator from '../infra/services/jwt-authenticator'

export default function loginFactory(): LoginController {
  const databaseConn = PgDatabaseConnection
  const userRepository = new UserRepository(databaseConn)
  const hasherService = new BcryptHasher()
  const authenticatorService = new JWTAuthenticator(userRepository, hasherService)
  const loginUsecase = new LoginUsecase(authenticatorService)
  return new LoginController(loginUsecase)
}
