import IAuthenticatorService from '../../domain/service/authenticator'
import ICredentials from '../protocol/credentials'
import { IOutputLoginDto } from '../protocol/login'
import IUsecase from '../protocol/usecase'

export default class LoginUsecase
  implements IUsecase<ICredentials, IOutputLoginDto>
{
  constructor(private authenticatorService: IAuthenticatorService) {}
  async exec(input: ICredentials): Promise<IOutputLoginDto> {
    const result = await this.authenticatorService.login(input)
    if (!result.token) return { token: undefined }
    return { token: result.token }
  }
}
