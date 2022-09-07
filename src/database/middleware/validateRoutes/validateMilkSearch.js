import Ajv from "ajv";
import ValidateMilkSearch from "../validateSchema/searchMilkSchema.js";

const ajv = new Ajv({ allErrors: true });

export default {
  execute: (req, res, next) => {
    const param = req.body;
    const paramValidate = ajv.compile(ValidateMilkSearch);
    const validateParam = paramValidate(param);

    if (!validateParam) {
      return res.status(400).json({ message: paramValidate.errors });
    }
    return next();
  },
};
