import { Router } from "express";
import { TripModel } from "../interfaces/trip.model.js";
import handler from "express-async-handler";
import admin from "../middleware/admin.mid.js";
const router = Router();
//obtener todo los libros con metodo GET
router.get(
  "/",
  handler(async (req, res) => {
    const trips = await TripModel.find({});
    res.send(trips);
  })
);
//obtener un libro por su id
router.get(
  "/:tripId",
  handler(async (req, res) => {
    const { tripId } = req.params;
    const trips = await TripModel.findOne({ _id: tripId });
    res.send(trips);
  })
);

// Elimina todos los documentos en la colección de libros
router.delete(
  "/",
  admin,
  handler(async (req, res) => {
    await TripModel.deleteMany({});

    res.send({
      message: "viajes eliminados correctamente",
    });
  })
);
// Elimina un libro por su id
router.delete(
  "/:tripId",
  // admin,
  handler(async (req, res) => {
    const { tripId } = req.params;
    await TripModel.deleteOne({ _id: tripId });
    res.send({ message: "Se elimino correctamente el libro" });
  })
);
//crea un nuevo libro
router.post(
  "/",
  // admin,
  handler(async (req, res) => {
    const newTrip = req.body;
    const createTrip = await TripModel.create(newTrip);
    res.send(createTrip);
  })
);
//actualiza un libro por su id
router.put(
  "/:tripId",
  // admin,
  handler(async (req, res) => {
    const updateTrip = req.body;
    const tripId = req.params.tripId;
    const result = await TripModel.findByIdAndUpdate(tripId, updateTrip, { new: true });
    res.send(result);
    console.log("Actualizado correctamente");
  })
);

//busca un libro por su titulo, categoria o autor
// router.get(
//   "/search/:searchTerm",
//   handler(async (req, res) => {
//     const { searchTerm } = req.params;
//     const searchRegex = new RegExp(searchTerm, "i");

//     const books = await TripModel.find({
//       $or: [
//         { titulo: { $regex: searchRegex } },
//         { categoria: { $regex: searchRegex } },
//         { autor: { $regex: searchRegex } },
//       ],
//     });
//     res.send(books);
//   })
// );

export default router;
