import createFarmRepository from "../database/repository/farm/createFarmRepository.js";

export default {
  create: async (req, res, next) => {
    try {
      const farm = req.body;
      const resultCreate = await createFarmRepository.execute(farm);
      if(resultCreate?.error){
        return res.status(resultCreate.status).json(resultCreate);
      }

      return res.status(201).json(resultCreate);
    } catch (error) {
      return next(error);
    }
  },
};
