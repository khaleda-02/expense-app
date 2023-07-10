import { PartialType } from '@nestjs/mapped-types';
import { CreateReportDto } from './create-report.dto';
import { ReportType } from '../entities/report.entity';

export class UpdateReportDto extends PartialType(CreateReportDto) {
  type: ReportType;
}
