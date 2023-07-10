import { Injectable } from '@nestjs/common';
import { UpdateReportDto } from './dto/update-report.dto';
import { data } from 'src/data';
import { Report, ReportType } from './entities/report.entity';
import { CreateReportDto } from './dto/create-report.dto';
import { v4 as uuid } from 'uuid';
@Injectable()
export class ReportsService {
  findAll(type: ReportType): Report[] {
    console.log(data.report);
    return data.report.filter((re) => re.type == type);
  }

  findOne(id: string, type: ReportType) {
    return data.report.find((re) => re.type == type && re.id == id);
  }

  createReport(type: ReportType, { source, amount }: CreateReportDto): Report {
    const report: Report = {
      id: uuid(),
      source,
      amount,
      createdAt: new Date(),
      updatedAt: new Date(),
      type,
    };
    data.report.push(report);
    return report;
  }

  updateReport(id: string, UpdateReportDto: UpdateReportDto) {
    let updated: Report;
    data.report = data.report.map((re) => {
      if (re.id == id) {
        re = {
          ...re,
          ...UpdateReportDto,
        };
        updated = re;
        return re;
      }
      return re;
    });
    return updated;
  }

  remove(id: string) {
    // we need to impolement the non found report , to make the client side there's error
    // const updaedReports = data.report.filter((re) => re.id != id);
    // data.report = updaedReports;
    // return id;

    //! enhanced  code :
    const index = data.report.findIndex((re) => re.id == id);
    if (index == -1) return;

    data.report.splice(index, 1);
    return id;
  }
}
