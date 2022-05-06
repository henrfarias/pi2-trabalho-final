export interface IInputSimulationDto {
  name: string
  applicationDate: string
  dueDate: string
  annualInterest: number
  initialValue: number
  monthlyContribution?: number
}

export interface IOutputSimulationDto {
  name: string
  applicationDate: string
  dueDate: string
  annualInterest: number
  initialValue: number
  monthlyContribution: number
  withdraw: number
}