import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // 創建 NestFactory 實例
  const app = await NestFactory.create(AppModule);
  // 監聽 3000 端口
  await app.listen(3000);
}
bootstrap();
