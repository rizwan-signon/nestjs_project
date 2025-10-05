import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  Post,
  Query,
} from '@nestjs/common';
import { PropertyService } from './property.service';

@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @Get()
  getAllProperties(@Query('sort') sortQuery?: string) {
    // If no sort query provided, return all properties
    if (typeof sortQuery === 'undefined') {
      return this.propertyService.getProperties();
    }

    // Parse boolean-like query values manually to avoid throwing on missing/invalid values
    const lower = String(sortQuery).toLowerCase();
    const sort = lower === 'true' || lower === '1' || lower === 'yes';
    console.log(sort);
    this.propertyService.sortProperties(sort);
    return 'This will sort properties based on query params';
  }
  @Post()
  createProperty(@Body() body: any) {
    return this.propertyService.createProperty(body);
  }
  @Get(':propertyId')
  getPropertyByID(@Param('propertyId') propertyId: string) {
    return this.propertyService.getPropertyByID(propertyId);
  }
  @Get()
  sortProperties(@Query('sort', ParseBoolPipe) sort: boolean) {
    console.log(sort);
    this.propertyService.sortProperties(sort);
    return 'This will sort properties based on query params';
  }
}
