import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  // 取得歡迎訊息
  getHello(): string {
    return this.appService.getHello();
  }
}
