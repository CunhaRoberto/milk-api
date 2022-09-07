import Ajv from "ajv";
import ValidatePriceMilkMonthSearch from "../validateSchema/searchPriceMilkMonthSchema.js";

const ajv = new Ajv({ allErrors: true });

export default {
  execute: (req, res, next) => {
    const param = req.body;
    const paramValidate = ajv.compile(ValidatePriceMilkMonthSearch);
    const validateParam = paramValidate(param);

    if (!validateParam) {
      return res.status(400).json({ message: paramValidate.errors });
    }
    return next();
  },
};
