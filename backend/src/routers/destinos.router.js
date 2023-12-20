import { Router } from "express";
import { TripModel } from "../interfaces/trip.model.js";
import handler from "express-async-handler";
import admin from "../middleware/admin.mid.js";
import { DestinoModel } from "../interfaces/destinos.model.js";

const router = Router();
router.get(
  "/",
  handler(async (req, res) => {
    const destinos = await DestinoModel.find({});
    res.send(destinos);
  })
);
router.get(
  "/:destinoId",
  handler(async (req, res) => {
    const { destinoId } = req.params;
    const destinos = await DestinoModel.findOne({ _id: destinoId });
    res.send(destinos);
  })
);

router.delete(
  "/",
  admin,
  handler(async (req, res) => {
    await DestinoModel.deleteMany({});

    res.send({
      message: "tours eliminados correctamente",
    });
  })
);
router.delete(
  "/:destinoId",
  // admin,
  handler(async (req, res) => {
    const { DestinoModel } = req.params;
    await DestinoModel.deleteOne({ _id: destinoId });
    res.send({ message: "Se elimino correctamente el destino" });
  })
);
router.post(
  "/",
  // admin,
  handler(async (req, res) => {
    const newDestino = req.body;
    const createDestino = await DestinoModel.create(newDestino);
    res.send(createDestino);
  })
);
router.put(
  "/:destinoId",
  // admin,
  handler(async (req, res) => {
    const upadateDestino = req.body;
    const destinoId = req.params.tourId;
    const result = await DestinoModel.findByIdAndUpdate(destinoId, upadateDestino, { new: true });
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
