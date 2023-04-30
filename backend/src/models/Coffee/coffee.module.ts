import { Module } from '@nestjs/common';
import { CoffeeController } from './coffee.controller';

@Module({
  controllers: [CoffeeController],
  providers: [],
})
export class CoffeeModule {}
