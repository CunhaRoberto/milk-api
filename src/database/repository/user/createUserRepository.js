import User from "../../../models/User.js";
import { v4 as uuidv4 } from "uuid";
import randomInteger from "random-int";

export default {
  execute: async (user) => {
    try {
      const searchUser = await User.find({ email: user.email });
      if (searchUser.length > 0) {
        return { 
          error: "user already exists",
          status: 400 
        };
      }

      user._id = uuidv4()
      user.codUser = randomInteger(100, 100000)
      user.createdAt = new Date()
   
      const resultCreate = await User.create(user);     
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
