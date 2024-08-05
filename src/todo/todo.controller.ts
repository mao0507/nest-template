import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('todo') // 控制器路徑為 '/todo'
export class TodoController {
  // TodoController 類別

  @Get() // 處理GET請求
  getAll() {
    return [];
  }

  @Get('/example') // 處理GET請求，路徑為 '/todo/example'
  getExample() {
    return [
      {
        id: 1,
        title: 'Example',
        description: 'Example Description',
      },
    ];
  }

  // 通用路由符號
  @Get('/exam*ples') // 處理GET請求，路徑為 '/todo/exam*ples'
  getExamples() {
    return [
      {
        id: 1,
        title: 'Example',
        description: '通用路由符號範例',
      },
    ];
  }

  // 路由參數 Path Parameters
  @Get(':id') // 處理GET請求，路徑為 '/todo/:id'
  getTodo(@Param() params: { id: string }) {
    // 取得路由參數
    const { id } = params;
    return {
      id,
      title: `Title ${id}`,
      description: '路由參數範例',
    };
  }

  // 查詢參數 Query Parameters
  @Get() // 處理GET請求
  getQuery(@Query() query: { limit: string; skip: string }) {
    return query;
  }

  // 查詢參數 取出特定參數
  @Get() // 處理GET請求
  getSpecificQuery(@Query('limit') limit: string, @Query('skip') skip: string) {
    return { limit, skip };
  }
}
