// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class AppService {
//   getHello(): string {
//     return 'Hello World!';
//   }
// }


//mongodb
import { Injectable } from '@nestjs/common';
import Web3 from 'web3';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './app.interface';
import abi_value from './contact'

@Injectable()
export class TasksService {
  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) { }

  async create(task: any): Promise<Task> {
    console.log(task);

    if (task.streamId == '') {
      console.log('here')
      const createdTask = new this.taskModel(task);
      return createdTask;
    }
    else {
      const web3 = new Web3('https://sepolia.infura.io/v3/5c1e3ebb8cd14e518b8b01643c248da0');

      // Decode the event logs
      const eventAbi = abi_value.find((abi) => abi.name === 'Log'); // Replace 'Log' with the name of your event
      const decodedLogs = web3.eth.abi.decodeLog(eventAbi.inputs, task.logs[0].data, task.logs[0].topic1);
      console.log(decodedLogs);

      // Access the decoded data
      const component1 = Number(decodedLogs[0]); // uint256
      const component2 = decodedLogs[1].toString(); // string
      const component3 = decodedLogs[2].toString(); // string
      const component4 = Number(decodedLogs[3]); // uint256

      //creating the object to upload
      const obj = {
        val: component1,
        _name: component2,
        _address: component3,
        _phNumber: component4
      }

      console.log(obj);
      const createdTask = new this.taskModel(obj);
      return createdTask.save();
    }

  }

  async findAll(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }
}
