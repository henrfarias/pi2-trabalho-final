import UpdateUserUsecase from '../business/usecase/update-user'
import UpdateUserController from '../controller/update-user'
import pgDatabaseConnection from '../infra/database/pg-database-connection'
import UserRepository from '../infra/repository/user-repository'

export default function updateUserFactory(): UpdateUserController {
  const userRepository = new UserRepository(pgDatabaseConnection)
  const updateUserUsecase = new UpdateUserUsecase(userRepository)
  return new UpdateUserController(updateUserUsecase)
}
