import { Controller, Get } from '@nestjs/common';
import { getConnection } from 'typeorm';

@Controller('coffees')
export class CoffeeController {
  constructor() {}

  @Get('')
  async fetchAll() {
    return await getConnection()
      .createQueryBuilder()
      .select('*')
      .from('Coffee', 'coffee')
      .getRawMany();
  }
}
