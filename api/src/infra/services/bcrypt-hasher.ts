import bcrypt from 'bcrypt'
import IHasherService from '../../domain/service/hasher'

export default class BcryptHasher implements IHasherService {
  async hash(password: string): Promise<string> {
    const salt = 6
    const hashedPassword = await bcrypt.hash(password, salt)
    return hashedPassword
  }

  async compare(data: string, encript: string): Promise<boolean> {
    const isTruthy = await bcrypt.compare(data, encript)
    return isTruthy
  }
}
