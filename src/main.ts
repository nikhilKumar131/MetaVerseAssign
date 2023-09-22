import { NestFactory } from '@nestjs/core';
import { TasksModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(TasksModule);
  await app.listen(3000);
}
bootstrap();
