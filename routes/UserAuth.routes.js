const express = require("express");
const { signup, login } = require("../Controllers/UserAuth");
const router = express.Router();



/**
 * @swagger
 * /api/userAuth/create:
 *   post:
 *     summary: Create a new user
 *     tags:
 *       - User Authentication
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User created successfully
 *       400:
 *         description: Bad request
 */
router.post("/create", signup);
/**
 * @swagger
 * /api/userAuth/login:
 *   post:
 *     summary: Login a new user
 *     tags:
 *       - User Authentication
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User Login successfully
 *       400:
 *         description: Bad request
 */
router.post("/login",login)
module.exports = router;
