import Farm from "../../../models/farm.js";
import User from "../../../models/User.js";
import { v4 as uuidv4 } from "uuid";
import randomInteger from "random-int";

export default {
  execute: async (farm) => {
    try {
            
      const searchCodUser = await User.find({ codUser: farm.codUser })

      if (searchCodUser.length < 1){
        return { 
          error: "User does not exists",
          status: 404
        }
      }

      const searchFarm = await Farm.find({ name: farm.name, codUser : farm.codUser })

      if(searchFarm.length > 0 ){
        return { 
          error: "Farm already exists",
          status: 400
        }
      }
      
      farm._id = uuidv4()
      farm.codFarm = randomInteger(100, 100000)
      farm.createAt = new Date()

      const resultCreate = await Farm.create(farm)

      return resultCreate;
    } catch (error) {
      let description = error.message
      return { 
        error: "Registration failed", 
        description, 
        status: 500
      }
      
    }
  },
};
