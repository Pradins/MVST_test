import { Module } from '@nestjs/common';
import { TeaController } from './tea.controller';

@Module({
  controllers: [TeaController],
  providers: [],
})
export class TeaModule {}
