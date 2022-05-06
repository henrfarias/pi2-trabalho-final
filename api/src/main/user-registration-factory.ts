import UserRegistrationUsecase from '../business/usecase/user-registration'
import UserRegistrationController from '../controller/user-registration'
import PgDatabaseConnection from '../infra/database/pg-database-connection'
import UserRepository from '../infra/repository/user-repository'
import BcryptHasher from '../infra/services/bcrypt-hasher'

export default function userRegistrationFactory(): UserRegistrationController {
  const databaseConnection = PgDatabaseConnection
  const userRepository = new UserRepository(databaseConnection)
  const hasherService = new BcryptHasher()
  const userRegistrationUsecase = new UserRegistrationUsecase(userRepository, hasherService)
  return new UserRegistrationController(userRegistrationUsecase)
}
