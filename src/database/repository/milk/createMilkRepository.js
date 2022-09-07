import Farm from "../../../models/farm.js";
import Milk from "../../../models/milk.js";
import priceCalc from "../../../useCases/priceCalc.js";
import { v4 as uuidv4 } from "uuid";


export default {
  execute: async (milk) => {
    try {
     
      const searchCodFarm = await Farm.find({ codFarm: milk.codFarm });
      if (searchCodFarm.length < 1) {
        return { 
          error: "Farm does not exists",
          status: 404
        };
      }
        
      const dataFarm = await Farm.find({ codFarm: milk.codFarm }) 
      milk.codUser = dataFarm[0]._doc.codUser
      const month = (new Date(milk.dateDelivery).getUTCMonth()) + 1    
    
      const distance = dataFarm[0]._doc.kmDistanceDelivery  
      const volume = milk.literMilk
      const resultCalc = await priceCalc.execute(volume, month, distance)
      
      milk.priceBase = resultCalc.priceBase;
      milk.costBase = resultCalc.costBase;
      milk.finalPricePaid = resultCalc.finalPricePaid;
      milk.kmDeliveryDistance = distance;
      milk.createAt = new Date()
      milk._id = uuidv4()    
      const resultCreate = await Milk.create(milk);

      return resultCreate;
    } catch (error) {
      let description = error.message
      return { 
        error: "Registration failed", 
        description,
        status: 500
      };
    }
  },
};
