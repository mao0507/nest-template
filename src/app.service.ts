import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // 取得問候訊息
  getHello(): string {
    return 'Hello World!';
  }
}
