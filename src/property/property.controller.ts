import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PropertyService } from './property.service';

@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @Get()
  getAllProperties() {
    return this.propertyService.getProperties();
  }
  @Post()
  createProperty(@Body() body: any) {
    return this.propertyService.createProperty(body);
  }
}
