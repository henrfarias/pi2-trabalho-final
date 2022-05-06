import jwt, { JwtPayload } from 'jsonwebtoken'
import ICredentials from '../../business/protocol/credentials'
import IUserRepository from '../../business/repository/user'
import IAuthenticatorService from '../../domain/service/authenticator'
import IHasherService from '../../domain/service/hasher'

export default class JWTAuthenticator implements IAuthenticatorService {
  secret: string
  constructor(private userRepository: IUserRepository, private hasherService: IHasherService) {
    this.secret = process.env.APP_SECRET
  }

  async login(credentials: ICredentials): Promise<{ token: string }> {
    const user = await this.userRepository.findByUsername(credentials.username)
    if (!user) return { token: undefined }
    const isValidPassword = await this.hasherService.compare(
      credentials.password,
      user.password
    )
    if (!isValidPassword) return { token: undefined }
    const payload: jwt.JwtPayload = {
      userId: user.id,
      username: user.username,
    }

    const token = jwt.sign(payload, this.secret, { expiresIn: '1h' })
    return { token }
  }

  async auth(token: string): Promise<{ userId: number; username: string }> {
    try {
      const authenticate = jwt.verify(token, this.secret, { complete: true })
      const payload = authenticate.payload as JwtPayload
      return {
        userId: payload.userId,
        username: payload.username,
      }
    } catch (err) {
      return err
    }
  }
}
