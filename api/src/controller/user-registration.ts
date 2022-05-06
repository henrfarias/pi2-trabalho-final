import IController from '../business/protocol/controller'
import IHttpResponse from '../business/protocol/httpResponse'
import { IInputUserRegistrationUsecase } from '../business/protocol/user-registration'
import UserRegistrationUsecase from '../business/usecase/user-registration'

export default class UserRegistrationController
  implements IController<IInputUserRegistrationUsecase>
{
  constructor(private userRegistrationUsecase: UserRegistrationUsecase) {}

  async run(input: IInputUserRegistrationUsecase): Promise<IHttpResponse> {
    try {
      await this.userRegistrationUsecase.exec(input)
      return {
        statusCode: 201,
        body: undefined,
      }
    } catch (err) {
      console.error(err)
      return {
        statusCode: 500,
        body: {
          message: 'Something wrong happenned',
        },
      }
    }
  }
}
