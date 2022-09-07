import mongoose from "mongoose";


const { model, Schema } = mongoose;

const schema = new Schema({
  _id: {
    type: String    
  },
  codFarm: {
    type: Number,
    required: true,
  }, 
  codUser: {
    type: Number,
    required: true,
  },
  literMilk: {
    type: Number,
    required: true,
  }, 
  priceBase:{
    type: Number,
    required: true,
  },
  costBase:{
    type: Number,
    required: true,
  },  
  kmDeliveryDistance:{
    type: Number,
    required: true,
  },
  finalPricePaid:{
    type: Number,
    required: true,
  },
  dateDelivery: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date
  },
});

export default model("milk", schema, "milk");
