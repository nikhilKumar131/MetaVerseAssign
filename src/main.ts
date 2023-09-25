import { NestFactory } from '@nestjs/core';
import { TasksModule } from './app.module';
import * as process from 'process';

async function bootstrap() {
  const app = await NestFactory.create(TasksModule);
  app.enableCors();
  await app.listen(process.env.PORT );
}
bootstrap();
