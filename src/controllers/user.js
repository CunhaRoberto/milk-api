import createUserRepository from "../database/repository/user/createUserRepository.cjs";

export default {
  create: async (req, res, next) => {
    try {
      const user = req.body;
      const resultCreate = await createUserRepository.execute(user);
      if(resultCreate?.error){
        return res.status(resultCreate.status).json(resultCreate);
      }

      return res.status(201).json(resultCreate);
    } catch (error) {
      return next(error);
    }
  },
};
