export default interface IDateService {
  startDate: Date
  endDate: Date
  readonly YEAR_IN_MILISECONDS: number
  readonly MONTHS_IN_ONE_YEAR: number
  init(startDate: Date, endDate: Date): void
  timeInYears(): number
  timeInMonths(): number
  isInvalidRangeOfDate(): boolean
}