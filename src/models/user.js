import mongoose from "mongoose";

const { model, Schema } = mongoose;

const schema = new Schema({
  _id: {
    type: String
  },
  codUser: {
    type: Number
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  createdAt: {
    type: Date 
  },
});

export default model("user", schema, "user");
