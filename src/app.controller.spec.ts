import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './app.controller';
import { TasksService } from './app.service';

describe('AppController', () => {
  let appController: TasksController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [TasksService],
    }).compile();

    appController = app.get<TasksController>(TasksController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
