export default interface IHasherService {
  hash(password: string): Promise<string>
  compare(data: string, encript: string): Promise<boolean>
}