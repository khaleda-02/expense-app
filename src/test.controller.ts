import { Body, Controller, Get } from '@nestjs/common';

@Controller('test')
export class TestController {
  @Get()
  find(@Body() data: any): string {
    return 'test worked'
  }
}
