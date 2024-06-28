import { Module } from '@nestjs/common';
//^ dejar este espacio es buena practica

import { TuitsController } from './tuits.controller';
import { TuitsService } from './tuits.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tuit } from './tuits.entity';
import { User } from '../users/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Tuit, User])],
  //^ Esto dice, yo soy un modulo y tengo mis componentes q es un servicio y un controlador. y Hay q sacarlo del app.modules, ya no es necesario
  //^ Al agregar este modulo, cuando se crea ya lo agrega al modulo de la app imports: [TuitsModule],
  controllers: [TuitsController],
  providers: [TuitsService],
})
export class TuitsModule {}
