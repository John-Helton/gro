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

/**
 * @swagger
 * tags:
 *   name: Tours
 *   description: Endpoints para la gestión de tours
 *   x-order: 3  # Orden 3
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Tour:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         // Agrega aquí las propiedades específicas de tus tours
 */

/**
 * @swagger
 * /api/tours:
 *   get:
 *     tags: [Tours]
 *     summary: Obtener todos los tours
 *     responses:
 *       200:
 *         description: Lista de todos los tours
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tour'
 */

/**
 * @swagger
 * /api/tours/{tourId}:
 *   get:
 *     tags: [Tours]
 *     summary: Obtener un tour por su ID
 *     parameters:
 *       - in: path
 *         name: tourId
 *         required: true
 *         description: ID del tour
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Datos del tour
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tour'
 *       404:
 *         description: Tour no encontrado
 *         content:
 *           text/plain:
 *             example: Tour no encontrado
 */

/**
 * @swagger
 * /api/tours:
 *   delete:
 *     tags: [Tours]
 *     summary: Eliminar todos los tours
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Tours eliminados correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Tours eliminados correctamente
 */

/**
 * @swagger
 * /api/tours/{tourId}:
 *   delete:
 *     tags: [Tours]
 *     summary: Eliminar un tour por su ID
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: tourId
 *         required: true
 *         description: ID del tour
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tour eliminado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Tour eliminado correctamente
 *       404:
 *         description: Tour no encontrado
 *         content:
 *           text/plain:
 *             example: Tour no encontrado
 */

/**
 * @swagger
 * /api/tours:
 *   post:
 *     tags: [Tours]
 *     summary: Crear un nuevo tour
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       description: Datos del nuevo tour
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tour'
 *     responses:
 *       200:
 *         description: Tour creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tour'
 */

/**
 * @swagger
 * /api/tours/{tourId}:
 *   put:
 *     tags: [Tours]
 *     summary: Actualizar información de un tour por su ID
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: tourId
 *         required: true
 *         description: ID del tour
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Datos actualizados del tour
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tour'
 *     responses:
 *       200:
 *         description: Tour actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tour'
 *       404:
 *         description: Tour no encontrado
 *         content:
 *           text/plain:
 *             example: Tour no encontrado
 */


export default router;
