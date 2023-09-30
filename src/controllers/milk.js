import createMilkRepository from "../database/repository/milk/createMilkRepository.cjs";
import SearchMilkRepository from "../database/repository/milk/searchMilkRepository.cjs";
import SearchPriceMilkMonthRepository from "../database/repository/milk/searchPriceMilkMonthRepository.cjs";
import SearchPriceMilkYearRepository from "../database/repository/milk/searchPriceMilkYearRepository.cjs";


export default {
  create: async (req, res, next) => {
    try {
      const milk = req.body;
      const resultCreate = await createMilkRepository.execute(milk);
      if (resultCreate?.error){
        return res.status(resultCreate.status).json(resultCreate)       

      }
      return res.status(201).json(resultCreate);
      
    } catch (error) {
      return next(error);
    }
  },

  search: async (req, res, next) => {
    try {
      const milk = req.body;
      const resultCreate = await SearchMilkRepository.execute(milk);
      if(resultCreate?.error){
        return res.status(resultCreate.status).json(resultCreate);
      }
      return res.status(200).json(resultCreate);
    } catch (error) {
      return next(error);
    }
  },

  searchMonth: async (req, res, next) => {
    try {
      const milk = req.body;
      const resultCreate = await SearchPriceMilkMonthRepository.execute(milk);
      if(resultCreate?.error){
        return res.status(resultCreate.status).json(resultCreate);
      }
      return res.status(200).json(resultCreate);
    } catch (error) {
      return next(error);
    }
  },

  searchYear: async (req, res, next) => {
    try {
      const milk = req.body;
      const resultCreate = await SearchPriceMilkYearRepository.execute(milk);
      if(resultCreate?.error){
        return res.status(resultCreate.status).json(resultCreate);
      }
      return res.status(200).json(resultCreate);
    } catch (error) {
      return next(error);
    }
  },
};

