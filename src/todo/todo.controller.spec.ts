import { Test, TestingModule } from '@nestjs/testing';
import { TodoController } from './todo.controller';

describe('TodoController', () => {
  let controller: TodoController;

  beforeEach(async () => {
    /**
     * 創建測試模塊
     */
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoController],
    }).compile();

    controller = module.get<TodoController>(TodoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
