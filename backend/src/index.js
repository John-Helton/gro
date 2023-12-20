import doteven from "dotenv";
doteven.config();

import express from "express";
import cors from "cors";
import tripRouter from "./routers/trip.router.js"; "../routers/trip.router.js";
import userRouter from "./routers/user.router.js";

import { connectDB } from "./database/database.config.js";
import destinosRouter from "./routers/destinos.router.js";
import tourRouter from "./routers/tour.router.js";
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/GroupTravel", tripRouter);
app.use("/api/users", userRouter);
app.use("/api/destinos", destinosRouter);
app.use("/api/tours", tourRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Servidor encendido en http://localhost:${PORT}`)
);
