import dotenv from 'dotenv'
import pgp from 'pg-promise'
import IDatabaseConnection from './database-connection'

dotenv.config()

class PgDatabaseConnection implements IDatabaseConnection {
  username: string
  password: string
  host: string
  port: string
  database: string
  pgp: any
  constructor() {
    this.username = process.env.USER_DB
    this.password = process.env.PASSWORD_DB
    this.host = process.env.HOST_DB
    this.port = process.env.PORT_DB
    this.database = process.env.DATABASE
    this.pgp = pgp()(
      `postgres://${this.username}:${this.password}@${this.host}:${this.port}/${this.database}`
    )
  }
  async query(statement: string, params: any): Promise<any> {
    const result = await this.pgp.query(statement, params)
    return result
  }
}

export default new PgDatabaseConnection()
