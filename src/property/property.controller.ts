import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('property')
export class PropertyController {
  @Get()
  findAll() {
    return 'ok';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return id;
  }
  @Post()
  create() {
    return 'this method will create data';
  }
}
