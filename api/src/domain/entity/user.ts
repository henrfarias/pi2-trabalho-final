import IInputUserEntity from "../interface/user"

export default class User {
  readonly id?: number
  readonly name: string
  readonly username: string
  readonly password: string

  constructor(input: IInputUserEntity) {
    Object.assign(this, input)
  }
}
