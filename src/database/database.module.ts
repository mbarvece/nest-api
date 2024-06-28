import { Module } from '@nestjs/common';
import { DatabaseProvider } from './database.provider';

@Module({
  imports: [DatabaseProvider],
  exports: [DatabaseProvider], //^si lo exportas se comparte con otros modulos
})
export class DatabaseModule {}
