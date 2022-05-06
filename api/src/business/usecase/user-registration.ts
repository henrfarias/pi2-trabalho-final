import User from '../../domain/entity/user'
import IHasherService from '../../domain/service/hasher'
import IUsecase from '../protocol/usecase'
import { IInputUserRegistrationUsecase } from '../protocol/user-registration'
import IUserRepository from '../repository/user'

export default class UserRegistrationUsecase
  implements IUsecase<IInputUserRegistrationUsecase, void>
{
  constructor(
    private userRepository: IUserRepository,
    private hasher: IHasherService
  ) {}

  async exec(input: IInputUserRegistrationUsecase): Promise<void> {
    const hashedPassword = await this.hasher.hash(input.password)
    const user = new User({
      name: input.name,
      username: input.username,
      password: hashedPassword,
    })
    await this.userRepository.save(user)
  }
}
