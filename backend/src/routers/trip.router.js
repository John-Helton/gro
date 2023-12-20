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

/**
 * @swagger
 * tags:
 *   name: Group Travel
 *   description: Endpoints para la gestión de viajes en grupo
 *   x-order: 2  # Orden 2
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Trip:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         // Agrega aquí las propiedades específicas de tus viajes
 */

/**
 * @swagger
 * /api/trips:
 *   get:
 *     tags: [Group Travel]
 *     summary: Obtener todos los viajes
 *     responses:
 *       200:
 *         description: Lista de todos los viajes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Trip'
 */

/**
 * @swagger
 * /api/trips/{tripId}:
 *   get:
 *     tags: [Group Travel]
 *     summary: Obtener un viaje por su ID
 *     parameters:
 *       - in: path
 *         name: tripId
 *         required: true
 *         description: ID del viaje
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Datos del viaje
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Trip'
 *       404:
 *         description: Viaje no encontrado
 *         content:
 *           text/plain:
 *             example: Viaje no encontrado
 */

/**
 * @swagger
 * /api/trips:
 *   delete:
 *     tags: [Group Travel]
 *     summary: Eliminar todos los viajes
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Viajes eliminados correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Viajes eliminados correctamente
 */

/**
 * @swagger
 * /api/trips/{tripId}:
 *   delete:
 *     tags: [Group Travel]
 *     summary: Eliminar un viaje por su ID
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: tripId
 *         required: true
 *         description: ID del viaje
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Viaje eliminado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Viaje eliminado correctamente
 *       404:
 *         description: Viaje no encontrado
 *         content:
 *           text/plain:
 *             example: Viaje no encontrado
 */

/**
 * @swagger
 * /api/trips:
 *   post:
 *     tags: [Group Travel]
 *     summary: Crear un nuevo viaje
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       description: Datos del nuevo viaje
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Trip'
 *     responses:
 *       200:
 *         description: Viaje creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Trip'
 */

/**
 * @swagger
 * /api/trips/{tripId}:
 *   put:
 *     tags: [Group Travel]
 *     summary: Actualizar información de un viaje por su ID
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: tripId
 *         required: true
 *         description: ID del viaje
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Datos actualizados del viaje
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Trip'
 *     responses:
 *       200:
 *         description: Viaje actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Trip'
 *       404:
 *         description: Viaje no encontrado
 *         content:
 *           text/plain:
 *             example: Viaje no encontrado
 */


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
