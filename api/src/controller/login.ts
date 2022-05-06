import IController from '../business/protocol/controller'
import ICredentials from '../business/protocol/credentials'
import IHttpResponse from '../business/protocol/httpResponse'
import LoginUsecase from '../business/usecase/login'

export default class LoginController implements IController<ICredentials> {
  constructor(private loginUsecase: LoginUsecase) {}

  async run(input: ICredentials): Promise<IHttpResponse> {
    const result = await this.loginUsecase.exec(input)
    if (!result.token) return { statusCode: 400, body: undefined }
    return { statusCode: 200, body: { token: result.token } }
  }
}
