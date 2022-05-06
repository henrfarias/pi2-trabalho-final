import { IInputUpdateUser } from '../protocol/update-user';
import IUsecase from '../protocol/usecase'
import IUserRepository from '../repository/user';

export default class UpdateUserUsecase implements IUsecase<IInputUpdateUser, void> {
  constructor(private userRepository: IUserRepository) {}

  async exec(input: IInputUpdateUser): Promise<void> {
    await this.userRepository.update(input)
  }
}
