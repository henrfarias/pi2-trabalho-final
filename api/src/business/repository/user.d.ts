import User from "../../domain/entity/user";
import { IInputUpdateUser } from "../protocol/update-user";

export default interface IUserRepository {
  save(user: User): Promise<void>
  findByUsername(username: string): Promise<User>
  update(input: IInputUpdateUser): Promise<void>
}