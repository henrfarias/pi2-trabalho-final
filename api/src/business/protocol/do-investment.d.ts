export interface IInputDoInvestmentDto {
  userId: number
  name: string
  applicationDate: string
  dueDate: string
  annualInterest: number
  initialValue: number
  monthlyContribution?: number
}

export interface IOutputDoInvestmentDto {
  name: string
  applicationDate: string
  dueDate: string
  annualInterest: number
  initialValue: number
  monthlyContribution: number
  withdraw: number
}