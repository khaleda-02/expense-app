export enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

export class Report {
  id: string;
  source: string;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
  type: ReportType;
}
