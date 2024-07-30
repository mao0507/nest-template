import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [], // 導入模組
  controllers: [AppController], // 控制器
  providers: [AppService], // 服務提供者
})
export class AppModule {}
