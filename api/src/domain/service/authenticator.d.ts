import ICredentials from "../../business/protocol/credentials";

export default interface IAuthenticatorService {
  login(credentials: ICredentials): Promise<{ token: string }>
  auth(token: string): Promise<{ userId: number; username: string }>
}