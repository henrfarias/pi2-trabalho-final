import IAuthenticatorService from '../domain/service/authenticator'
import pgDatabaseConnection from '../infra/database/pg-database-connection'
import UserRepository from '../infra/repository/user-repository'
import BcryptHasher from '../infra/services/bcrypt-hasher'
import JWTAuthenticator from '../infra/services/jwt-authenticator'

export default function authMiddlewareFactory(): IAuthenticatorService {
  const hasherService = new BcryptHasher()
  const userRepository = new UserRepository(pgDatabaseConnection)
  return new JWTAuthenticator(userRepository, hasherService)
}
