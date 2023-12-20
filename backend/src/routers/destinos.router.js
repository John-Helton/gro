import { Router } from "express";
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

router.put(
  "/:destinoId",
  //admin,
  handler(async (req, res) => {
    const updateDestino = req.body;
    const destinoId = req.params.destinoId;
    const result = await DestinoModel.findByIdAndUpdate(destinoId, updateDestino, { new: true });
    res.send(result);
    console.log("Actualizado correctamente");
  })
);
router.delete(
  "/:destinoId",
  // admin,
  handler(async (req, res) => {
    const { destinoId } = req.params;  // Corregir el nombre de la variable
    await DestinoModel.deleteOne({ _id: destinoId });
    res.send({ message: "Se eliminó correctamente el destino" });
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
    const updateDestino = req.body;
    const destinoId = req.params.destinoId;  // Corregir el nombre de la variable
    const result = await DestinoModel.findByIdAndUpdate(destinoId, updateDestino, { new: true });
    res.send(result);
    console.log("Actualizado correctamente");
  })
);
/**
 * @swagger
 * tags:
 *   name: Destinos
 *   description: Endpoints para la gestión de destinos
 *   x-order: 4  # Orden 4
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Destino:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         // Agrega aquí las propiedades específicas de tus destinos
 */

/**
 * @swagger
 * /api/destinos:
 *   get:
 *     tags: [Destinos]
 *     summary: Obtener todos los destinos
 *     responses:
 *       200:
 *         description: Lista de todos los destinos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Destino'
 */

/**
 * @swagger
 * /api/destinos/{destinoId}:
 *   get:
 *     tags: [Destinos]
 *     summary: Obtener un destino por su ID
 *     parameters:
 *       - in: path
 *         name: destinoId
 *         required: true
 *         description: ID del destino
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Datos del destino
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Destino'
 *       404:
 *         description: Destino no encontrado
 *         content:
 *           text/plain:
 *             example: Destino no encontrado
 */

/**
 * @swagger
 * /api/destinos:
 *   delete:
 *     tags: [Destinos]
 *     summary: Eliminar todos los destinos
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Destinos eliminados correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Destinos eliminados correctamente
 */

/**
 * @swagger
 * /api/destinos/{destinoId}:
 *   delete:
 *     tags: [Destinos]
 *     summary: Eliminar un destino por su ID
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: destinoId
 *         required: true
 *         description: ID del destino
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Destino eliminado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Destino eliminado correctamente
 *       404:
 *         description: Destino no encontrado
 *         content:
 *           text/plain:
 *             example: Destino no encontrado
 */

/**
 * @swagger
 * /api/destinos:
 *   post:
 *     tags: [Destinos]
 *     summary: Crear un nuevo destino
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       description: Datos del nuevo destino
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Destino'
 *     responses:
 *       200:
 *         description: Destino creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Destino'
 */

/**
 * @swagger
 * /api/destinos/{destinoId}:
 *   put:
 *     tags: [Destinos]
 *     summary: Actualizar información de un destino por su ID
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: destinoId
 *         required: true
 *         description: ID del destino
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Datos actualizados del destino
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Destino'
 *     responses:
 *       200:
 *         description: Destino actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Destino'
 *       404:
 *         description: Destino no encontrado
 *         content:
 *           text/plain:
 *             example: Destino no encontrado
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
