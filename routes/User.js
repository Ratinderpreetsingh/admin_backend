/**
 * @swagger
 * tags:
 *   name: User
 *   description: Operations related to users
 * 
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         gender:
 *           type: string
 *                    
 *           
 */

const express = require("express");
const { cretarUser, getUserById, getAll_usersApi, deleteUser } = require("../Controllers/User");
const router = express.Router();

/**
 * @swagger
 * /api/user/create:
 *   post:
 *     summary: Create a new user
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       '201':
 *         description: Successfully created User
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       '400':
 *         description: Bad request. Invalid data.
 */
router.route("/create").post(cretarUser)

/**
 * @swagger
 * /api/user/get/{id}:
 *   get:
 *     summary: Get a user by ID
 *     tags:
 *       - User
 *     description: API to get a user by their ID
 *   
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the student
 *         schema:
 *           type: string
 *
 *     responses:
 *       200:
 *         description: Success. Returns a student.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */
router.route("/get/:id").get(getUserById)
/**
 * @swagger
 * /api/user/getAll:
 *   get:
 *     summary: Get all User
 *     tags:
 *       - User
 *     description: Retrieve a list of all User.
 *     responses:
 *       '200':
 *         description: A list of User.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.route("/getAll").get(getAll_usersApi)
/**
 * @swagger
 * /api/user/delete/{id}:
 *   delete:
 *     summary: Delete User by ID
 *     tags:
 *       - User
 *     description: Delete a User by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the User to be deleted
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful response. Returns a User.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */
router.route("/delete/:id").delete(deleteUser)
// router.delete("/delete/:id",deleteUser)

module.exports = router;
