import IDateService from "../../domain/service/date-service"
import precise from "../../shared/utils/precise"

export default class DateService implements IDateService {
  startDate: Date
  endDate: Date
  readonly YEAR_IN_MILISECONDS: number
  readonly MONTHS_IN_ONE_YEAR: number

  constructor() {
    this.YEAR_IN_MILISECONDS = 3.17098 * 10 ** -11
    this.MONTHS_IN_ONE_YEAR = 12
  }

  init(startDate: Date, endDate: Date): void {
    this.startDate = startDate
    this.endDate = endDate
  }

  public timeInYears(): number {
    const timeInMiliseconds = this.endDate.getTime() - this.startDate.getTime()
    const timeInYears = precise(timeInMiliseconds * this.YEAR_IN_MILISECONDS)
    return timeInYears
  }

  public timeInMonths(): number {
    const timeInMonths = this.timeInYears() * this.MONTHS_IN_ONE_YEAR
    return timeInMonths
  }

  public isInvalidRangeOfDate(): boolean {
    const dateDiff = this.endDate.getTime() - this.startDate.getTime()
    return dateDiff < 0
  }
}
