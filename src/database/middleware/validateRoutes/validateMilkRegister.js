import validateMilkRegister from "../validateSchema/registerMilkSchema.js";
import addFormats from 'ajv-formats'
import Ajv from "ajv";
const ajv = new Ajv({ allErrors: true, jsonPointers: true })
addFormats(ajv)

export default {
  execute: (req, res, next) => {
    const milk = req.body;
    const milkValidate = ajv.compile(validateMilkRegister);
    const validateMilk = milkValidate(milk);

    if (!validateMilk) {
      return res.status(400).json({ message: milkValidate.errors });
    }
    return next();
  },
};
