import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

class BodyDto {
  a: number;
  b: number;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  @Post()
  async create(@Body() body: BodyDto): Promise<BodyDto> {
    return body;
  }
}
