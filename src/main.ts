import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Request, Response } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use((req: Request, res: Response, next) => {
    next();
  });
  app.enableCors({
    origin: '*',
    credentials: true,
  });
  // app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
