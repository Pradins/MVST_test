import { Controller, Get } from '@nestjs/common';
import { getConnection } from 'typeorm';

@Controller('teas')
export class TeaController {
  constructor() {}

  @Get('')
  async fetchAll() {
    return await getConnection()
      .createQueryBuilder()
      .select('*')
      .from('Tea', 'tea')
      .getRawMany();
  }
}
