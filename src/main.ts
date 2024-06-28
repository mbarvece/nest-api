import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //^ Este casteo se hace para que funciones los validators de los DTO
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, //^ castea del body a los objetos
      whitelist: true, //^ Solo deja pasar los metodos de los objetos que esten en la clase
      forbidNonWhitelisted: true, //^ si no machea con el objeto, devuelve un bad request
      forbidUnknownValues: true,
      transformOptions: {
        enableImplicitConversion: true, //^ con esto nos aseguramos quelos tipos de ts van a ser siempre los correctos, comno para con la paginacion de getTuis(..)
      },
    }),
  );

  await app.listen(3000);
}
bootstrap();
