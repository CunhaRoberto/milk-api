import swaggerUi from "swagger-ui-express";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";

import swaggerDocument from "./documents/swagger.js";
import userRoutes from "./routes/user.js";
import farmRoutes from "./routes/farm.js";
import milkRoutes from "./routes/milk.js";
dotenv.config();

const HOST = process.env.HOST || "https://localhost";
const PORT = process.env.PORT || 3000;

mongoose.connect(
  process.env.MONGO_URL || "mongodb://localhost:27017/checkLists",
  {},
  (err) => {
    const msg = err
      ? `Failed to connect to MongoDB: ${err}`
      : `⚡️ MongoDB connection established successfully`;
    console.log(msg);
  }
);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/v1/user", userRoutes);
app.use("/v1/farm", farmRoutes);
app.use("/v1/milk", milkRoutes);
app.use("/v1/priceLiter", milkRoutes);

app.use(
  "/documents",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    swaggerOptions: {
      defaultModelsExpandDepth: -1,
    },
  })
);

app
  .route("/healthCheck")
  .get((request, response) => response.json({ status: "healthy" }));

app.all("*", (request, response) => {
  response.status(400).json({
    message: "Whoops, wrong way.",
  });
});
app.listen(PORT, () => {
  console.log(`⚡️ Server is running at ${HOST}:${PORT}`);
});
