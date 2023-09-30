import mongoose from "mongoose";

const { model, Schema } = mongoose;

const schema = new Schema({
  _id: {
    type: String    
  },
  codUser: {
    type: Number,
    required: true,
  },
  codFarm: {
    type: Number
  },
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  kmDistanceDelivery: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date    
  },
});

export default model("farm", schema, "farm");
