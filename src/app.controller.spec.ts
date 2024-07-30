import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    // 創建測試模塊
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController], // 注入AppController
      providers: [AppService], // 注入AppService
    }).compile();

    appController = app.get<AppController>(AppController); // 獲取AppController實例
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!'); // 斷言getHello方法返回"Hello World!"
    });
  });
});
