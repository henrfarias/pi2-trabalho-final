import IController from '../business/protocol/controller'
import IHttpResponse from '../business/protocol/httpResponse'
import { IInputUpdateUser } from '../business/protocol/update-user'
import UpdateUserUsecase from '../business/usecase/update-user'

export default class UpdateUserController implements IController {
  constructor(private updateUserUsecase: UpdateUserUsecase) {}
  async run(input: IInputUpdateUser): Promise<IHttpResponse> {
    try {
      await this.updateUserUsecase.exec(input)
      return { statusCode: 204, body: undefined }
    } catch (err) {
      return { statusCode: 500, body: { message: 'Something wrong happenned' } }
    }
  }
}
