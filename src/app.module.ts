import { Module } from '@nestjs/common';
import { TuitsModule } from './modules/tuits/tuits.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), //^ Con el isGlobal: true le decis que use este modiuo en toda la app de forma global
    TuitsModule,
    //! UsersModule,
    //! DatabaseModule,
    // TypeOrmModule.forRoot({  //^ ya no es necesarion porque la configuracion esta en el database.module
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'admin',
    //   password: 'admin',
    //   database: 'postgres',
    //   autoLoadEntities: true,
    //   synchronize: true, //^ Esto es solo para este test, ya q sincroniza las entidades con la base
    // }),
  ],
})
export class AppModule {
  static port: number;

  constructor(private readonly configService: ConfigService) {
    AppModule.port = +this.configService.get('PORT');
  }
}
