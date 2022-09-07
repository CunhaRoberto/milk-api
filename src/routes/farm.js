import express from "express";
import Farm from "../controllers/farm.js";

import validateFarmRegister from "../database/middleware/validateRoutes/validateFarmRegister.js";

const routes = express.Router();

routes.post("/", validateFarmRegister.execute, Farm.create);

export default routes;
