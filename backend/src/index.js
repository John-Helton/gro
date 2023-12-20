import doteven from "dotenv";
doteven.config();

import express from "express";
import cors from "cors";
import tripRouter from "./routers/trip.router.js";
("../routers/trip.router.js");
import userRouter from "./routers/user.router.js";

import { connectDB } from "./database/database.config.js";
import destinosRouter from "./routers/destinos.router.js";
import tourRouter from "./routers/tour.router.js";
import swaggerJSDoc from "swagger-jsdoc";
import swggerUi from "swagger-ui-express";
import path from "path";
import { fileURLToPath } from "url";
connectDB();

//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);


const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Group Travel API",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./src/routers/*.js"],
};

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/GroupTravel", tripRouter);
app.use("/api/users", userRouter);
app.use("/api/destinos", destinosRouter);
app.use("/api/tours", tourRouter);

/*const publicFolder = path.join(__dirname, "public");
app.use(express.static(publicFolder));

app.get('*', (req, res) => {
  const indexFilePath = path.join(publicFolder, 'index.html');
  res.sendFile(indexFilePath);
});*/


app.use("/", swggerUi.serve, swggerUi.setup(swaggerJSDoc(swaggerSpec)));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Servidor encendido en http://localhost:${PORT}`)
);
