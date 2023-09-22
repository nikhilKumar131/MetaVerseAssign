import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
  val: Number,
  _name: String,
  _address: String,
  _phNumber: Number,
});

export interface Task extends mongoose.Document {
  val: Number;
  _name: String;
  _address: String;
  _phNumber: Number;
}
