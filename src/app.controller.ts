

import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './app.service';
import { Task } from './app.interface';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Post()
  async create(@Body() task: any): Promise<Task> { //change1
    return this.tasksService.create(task);
  }
}

