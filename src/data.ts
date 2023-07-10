import { ReportType, Report } from './reports/entities/report.entity';

export const data: Data = {
  report: [
    {
      id: 'c5600824-d9a0-4071-bb8a-b33fc0ff6bd6',
      source: ' string',
      amount: 234,
      createdAt: new Date(),
      updatedAt: new Date(),
      type: ReportType.EXPENSE,
    },
    {
      id: 'c5600824-d9a0-4071-bb8a-b33fc0ff6bd3',
      source: ' string',
      amount: 234,
      createdAt: new Date(),
      updatedAt: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: 'c5600824-d9a0-4071-bb8a-b33fc0ff6bd2',
      source: ' string',
      amount: 234,
      createdAt: new Date(),
      updatedAt: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: 'c5600824-d9a0-4071-bb8a-b33fc0ff6bb6',
      source: ' string',
      amount: 234,
      createdAt: new Date(),
      updatedAt: new Date(),
      type: ReportType.INCOME,
    },
  ],
};

export interface Data {
  report: Report[];
}
