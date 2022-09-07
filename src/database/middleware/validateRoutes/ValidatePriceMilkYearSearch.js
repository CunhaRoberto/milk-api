import Ajv from "ajv";
import ValidatePriceMilkYearSearch from "../validateSchema/searchPriceMilkYearSchema.js";

const ajv = new Ajv({ allErrors: true });

export default {
  execute: (req, res, next) => {
    const param = req.body;
    const paramValidate = ajv.compile(ValidatePriceMilkYearSearch);
    const validateParam = paramValidate(param);

    if (!validateParam) {
      return res.status(400).json({ message: paramValidate.errors });
    }
    return next();
  },
};
