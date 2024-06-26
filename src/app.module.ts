import { Module } from '@nestjs/common';
import { TuitsModule } from './modules/tuits/tuits.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TuitsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true, //^ Esto es solo para este test, ya q sincroniza las entidades con la base
    }),
  ],
})
export class AppModule {}
