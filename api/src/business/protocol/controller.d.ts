import IHttpResponse from "./httpResponse";

export default interface IController<I = unknown> {
  run(input: I): Promise<IHttpResponse>
}
