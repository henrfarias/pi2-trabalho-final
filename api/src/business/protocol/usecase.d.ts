export default interface IUsecase<I = unknown, O = unknown> {
  exec(input: I): Promise<O>
}