import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ParseUUIDPipe,
  ParseEnumPipe,
} from '@nestjs/common';
import { ReportsService } from './reports.service';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { Report, ReportType } from './entities/report.entity';
@Controller('report/:type') // type : expense || income
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get()
  getAllReports(
    @Param('type', new ParseEnumPipe(ReportType)) strType: string,
  ): Report[] {
    const type: ReportType =
      strType == 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.reportsService.findAll(type);
  }

  @Get(':id')
  getReportById(
    @Param('id', ParseUUIDPipe) id: string,
    @Param('type', new ParseEnumPipe(ReportType)) strType: string,
  ): Report {
    const type: ReportType =
      strType == 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.reportsService.findOne(id, type);
  }

  @Post()
  createReport(
    @Body() createReportDto: CreateReportDto,
    @Param('type', new ParseEnumPipe(ReportType)) strType: string,
  ): Report {
    const type: ReportType =
      strType == 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.reportsService.createReport(type, createReportDto);
  }

  @Put(':id')
  updateReport(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateReportDto: UpdateReportDto,
  ) {
    return this.reportsService.updateReport(id, updateReportDto);
  }

  @Delete(':id')
  removeReport(@Param('id', ParseUUIDPipe) id: string) {
    return this.reportsService.remove(id);
  }
}
