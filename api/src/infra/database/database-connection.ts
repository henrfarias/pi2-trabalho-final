export default interface IDatabaseConnection {
  query(statement: string, params: any): Promise<any>
}
