import { Injectable, Post } from '@nestjs/common';

@Injectable()
export class PropertyService {
  getProperties() {
    return 'This will return all properties';
  }

  createProperty(userData: any) {
    return `This will create a property with the following data: ${JSON.stringify(userData)}`;
  }
}
