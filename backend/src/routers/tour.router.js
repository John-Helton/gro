import { Router } from "express";
import { TourModel } from "../interfaces/tour.model.js";
import handler from "express-async-handler";
import admin from "../middleware/admin.mid.js";

const router = Router();

router.get(
  "/",
  handler(async (req, res) => {
    const tours = await TourModel.find({});
    res.send(tours);
  })
);

router.get(
  "/:tourId",
  handler(async (req, res) => {
    const { tourId } = req.params;
    const tour = await TourModel.findOne({ _id: tourId });
    res.send(tour);
  })
);

router.delete(
  "/",
  admin,
  handler(async (req, res) => {
    await TourModel.deleteMany({});
    res.send({
      message: "Tours eliminados correctamente",
    });
  })
);

router.delete(
  "/:tourId",
  // admin,
  handler(async (req, res) => {
    const { tourId } = req.params;
    await TourModel.deleteOne({ _id: tourId });
    res.send({ message: "Se eliminó correctamente el tour" });
  })
);

router.post(
  "/",
  // admin,
  handler(async (req, res) => {
    const newTour = req.body;
    const createTour = await TourModel.create(newTour);
    res.send(createTour);
  })
);

router.put(
  "/:tourId",
  // admin,
  handler(async (req, res) => {
    const updateTour = req.body;
    const tourId = req.params.tourId;
    const result = await TourModel.findByIdAndUpdate(tourId, updateTour, { new: true });
    res.send(result);
    console.log("Actualizado correctamente");
  })
);

export default router;
