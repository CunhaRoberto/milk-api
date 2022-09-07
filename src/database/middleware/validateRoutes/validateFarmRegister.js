import Ajv from "ajv";
import validateFarmRegister from "../validateSchema/registerFarmSchema.js";

const ajv = new Ajv({ allErrors: true });

export default {
  execute: (req, res, next) => {
    const farm = req.body;
    const farmValidate = ajv.compile(validateFarmRegister);
    const validateFarm = farmValidate(farm);

    if (!validateFarm) {
      return res.status(400).json({ message: farmValidate.errors });
    }
    return next();
  },
};
