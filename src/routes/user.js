import express from "express";
import User from "../controllers/user.mjs";
import validateRegister from "../database/middleware/validateRoutes/validateRegister.js";

const routes = express.Router();

routes.post("/", validateRegister.execute, User.create);

export default routes;
