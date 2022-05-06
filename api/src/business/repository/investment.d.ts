export default interface IInvestmentRepository {
  save(input: IOutputSimulationDto, userId: number): Promise<void>
}