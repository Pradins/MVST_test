import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Coffee
import { CoffeeController } from './models/Coffee/coffee.controller';
import { CoffeeEntity } from './models/Coffee/coffee.entity';
import { CoffeeModule } from './models/Coffee/coffee.module';

// Tea
import { TeaController } from './models/Tea/tea.controller';
import { TeaEntity } from './models/Tea/tea.entity';
import { TeaModule } from './models/Tea/tea.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'mvst-coffee-tea-challenge-db',
      entities: [CoffeeEntity, TeaEntity],
      synchronize: true,
    }),
    CoffeeModule,
    TeaModule,
  ],
  controllers: [CoffeeController, TeaController],
  providers: [],
})
export class AppModule {}
