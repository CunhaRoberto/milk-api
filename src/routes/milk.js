import express from "express";
import Milk from "../controllers/milk.mjs";

import ValidateMilkRegister from "../database/middleware/validateRoutes/validateMilkRegister.js";
import ValidateMilkSearch from "../database/middleware/validateRoutes/validateMilkSearch.js";
import ValidatePriceMilkMonthSearch from "../database/middleware/validateRoutes/ValidatePriceMilkMonthSearch.js";
import ValidatePriceMilkYearSearch from "../database/middleware/validateRoutes/ValidatePriceMilkYearSearch.js";


const routes = express.Router();

routes.post("/", ValidateMilkRegister.execute, Milk.create);
routes.post("/search", ValidateMilkSearch.execute, Milk.search);
routes.post("/month", ValidatePriceMilkMonthSearch.execute, Milk.searchMonth);
routes.post("/year", ValidatePriceMilkYearSearch.execute, Milk.searchYear);
export default routes;
