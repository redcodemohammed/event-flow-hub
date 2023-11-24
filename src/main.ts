import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // http://locahost:3333/v1
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  // http://locahost:3333/api/v1
  app.setGlobalPrefix('api');

  app.enableCors();

  await app.listen(process.env.PORT || 3333);
}
bootstrap();
