import { IInputUpdateUser } from '../../business/protocol/update-user'
import IUserRepository from '../../business/repository/user'
import User from '../../domain/entity/user'
import IDatabaseConnection from '../database/database-connection'

export default class UserRepository implements IUserRepository {
  constructor(private databaseConn: IDatabaseConnection) {}

  async save(user: User): Promise<void> {
    await this.databaseConn.query(
      `INSERT INTO web_prog.user (name, username, password) VALUES (
        $1, $2, $3
      )`,
      [user.name, user.username, user.password]
    )
  }

  async findByUsername(username: string): Promise<User> {
    const [userData] = await this.databaseConn.query(
      `SELECT id, name, username, password FROM web_prog.user WHERE username=$1`,
      [username]
    )
    if (!userData) return void 0
    const user = new User({
      id: userData.id,
      name: userData.name,
      username: userData.username,
      password: userData.password,
    })
    return user
  }

  async update(input: IInputUpdateUser): Promise<void> {
    if (!input.name) return
    await this.databaseConn.query(
      `UPDATE web_prog.user SET name=$1 WHERE id=$2`,
      [input.name, input.userId]
    )
  }
}
