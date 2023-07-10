import { IsPositive, IsString, IsNotEmpty, IsNumber } from 'class-validator';
export class CreateReportDto {
  @IsNotEmpty()
  @IsString()
  source: string;

  @IsNumber()
  @IsPositive()
  amount: number;
}
