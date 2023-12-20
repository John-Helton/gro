import { Router } from "express";
import jwt from "jsonwebtoken"; // Add the missing import statement for the jwt module
const router = Router();
import handler from "express-async-handler";
import { UserModel } from "../interfaces/user.model.js";
import bcrypt from "bcryptjs";
import auth from "../middleware/auth.mid.js";
const PASSWORD_HASH_SALT_ROUNDS = 10;

router.post(
  "/login",
  handler(async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.send(generateTokenResponse(user));
      return;
    }

    res.status(401).send("Credenciales incorrectas");
  })
);
router.post(
  "/register",
  handler(async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      res.status(400).send("Las contraseñas no coinciden");
      return;
    }

    const userExists = await UserModel.findOne({ email });

    if (userExists) {
      res.status(400).send("El usuario ya existe");
      return;
    }

    const hashedPassword = await bcrypt.hash(
      password,
      PASSWORD_HASH_SALT_ROUNDS
    );

    const newUser = {
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
    };

    const result = await UserModel.create(newUser);
    res.send(generateTokenResponse(result));
  })
);

router.put(
  "/updateProfile",
  auth,
  handler(async (req, res) => {
    const { name, apellido, email, dateOfBirth, perfilIMG } = req.body;
    const user = await UserModel.findByIdAndUpdate(
      req.user.id,
      { name, apellido, email, dateOfBirth, perfilIMG },
      { new: true }
    );
    res.send(generateTokenResponse(user));
  })
);

router.put(
  "/changePassword",
  auth,
  handler(async (req, res) => {
    const { currentPassword, newPassword } = req.body;
    const user = await UserModel.findById(req.user.id);

    if (!user) {
      res.status(404).send("¡Error al cambiar la contraseña!");
      return;
    }
    const equal = await bcrypt.compare(currentPassword, user.password);
    if (!equal) {
      res.status(401).send("¡La contraseña actual no es correcta!");
      return;
    }
    user.password = await bcrypt.hash(newPassword, PASSWORD_HASH_SALT_ROUNDS);
    await user.save();
    res.send("¡Contraseña actualizada!");
  })
);

/**
 * Generates a token response object for a user.
 * @param {Object} user - The user object.
 * @param {string} user.id - The user's ID.
 * @param {string} user.email - The user's email.
 * @param {boolean} user.isAdmin - Indicates if the user is an admin.
 * @returns {Object} - The token response object.
 * @property {string} id - The user's ID.
 * @property {string} email - The user's email.
 * @property {string} name - The user's name.
 * @property {string} apellido - The user's last name.
 * @property {boolean} isAdmin - Indicates if the user is an admin.
 * @property {string} token - The generated token.
 */
const generateTokenResponse = (user) => {
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );

  return {
    id: user.id,
    email: user.email,
    name: user.name,
    apellido: user.apellido,
    isAdmin: user.isAdmin,
    token,
  };
};

/**
 * @swagger
 * tags:
 *   name: Group Travel
 *   description: Endpoints para la gestión de viajes en grupo
 *   x-order: 1  # Orden 1
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     GroupTravelUser:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         email:
 *           type: string
 *         name:
 *           type: string
 *         apellido:
 *           type: string
 *         isAdmin:
 *           type: boolean
 *         token:
 *           type: string
 */

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     tags: [Group Travel]
 *     summary: Iniciar sesión
 *     requestBody:
 *       description: Credenciales de inicio de sesión
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso, devuelve el token de acceso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GroupTravelUser'
 *       401:
 *         description: Credenciales incorrectas
 *         content:
 *           text/plain:
 *             example: Credenciales incorrectas
 */

/**
 * @swagger
 * /api/users/register:
 *   post:
 *     tags: [Group Travel]
 *     summary: Registrar un nuevo usuario
 *     requestBody:
 *       description: Datos del nuevo usuario
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               confirmPassword:
 *                 type: string
 *             required:
 *               - name
 *               - email
 *               - password
 *               - confirmPassword
 *     responses:
 *       200:
 *         description: Usuario registrado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GroupTravelUser'
 *       400:
 *         description: Las contraseñas no coinciden o el usuario ya existe
 *         content:
 *           text/plain:
 *             examples:
 *               Las contraseñas no coinciden
 *               El usuario ya existe
 */

/**
 * @swagger
 * /api/users/updateProfile:
 *   put:
 *     tags: [Group Travel]
 *     summary: Actualizar perfil de usuario
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       description: Datos actualizados del usuario
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               apellido:
 *                 type: string
 *               email:
 *                 type: string
 *               dateOfBirth:
 *                 type: string
 *               perfilIMG:
 *                 type: string
 *             required:
 *               - name
 *               - apellido
 *               - email
 *               - dateOfBirth
 *               - perfilIMG
 *         responses:
 *           200:
 *             description: Usuario actualizado exitosamente
 *             content:
 *               application/json:
 *                 schema:
 *                   $ref: '#/components/schemas/GroupTravelUser'
 *           401:
 *             description: Acceso no autorizado
 *             content:
 *               text/plain:
 *                 example: Acceso no autorizado
 */

/**
 * @swagger
 * /api/users/changePassword:
 *   put:
 *     tags: [Group Travel]
 *     summary: Cambiar contraseña de usuario
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       description: Datos de cambio de contraseña
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               currentPassword:
 *                 type: string
 *               newPassword:
 *                 type: string
 *             required:
 *               - currentPassword
 *               - newPassword
 *     responses:
 *       200:
 *         description: Contraseña actualizada exitosamente
 *         content:
 *           text/plain:
 *             example: Contraseña actualizada exitosamente
 *       401:
 *         description: La contraseña actual no es correcta
 *         content:
 *           text/plain:
 *             example: La contraseña actual no es correcta
 *       404:
 *         description: Error al cambiar la contraseña
 *         content:
 *           text/plain:
 *             example: Error al cambiar la contraseña
 */

export default router;
