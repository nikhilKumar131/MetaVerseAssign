

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksController } from './app.controller';
import { TasksService } from './app.service';
import { TaskSchema } from './app.interface';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://nikhilkumarrrr17:Priyanka%40786@cluster0.6frmgs0.mongodb.net/?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }]),
  ],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}

