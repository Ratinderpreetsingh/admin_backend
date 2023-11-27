const express = require("express");
const { createCategory, getCategorybyId, getAllcategory } = require("../Controllers/Category");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: API for managing categories.
 */

/**
 * @swagger
 * /api/categories/create:
 *   post:
 *     summary: Create a new category
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               category:
 *                 type: string
 *     responses:
 *       200:
 *         description: Category created successfully
 *       400:
 *         description: Bad request, missing required fields
 */
router.route('/create').post(createCategory);

/**
 * @swagger
 * /api/categories/get/{id}:
 *   get:
 *     summary: Get category by id
 *     tags: 
 *       - Categories
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the category
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 */
router.route("/get/:id").get(getCategorybyId)

/**
 * @swagger
 *  /api/categories/getall:
 *   get:
 *     summary: Get all categories
 *     tags:
 *       - Categories
 *     responses:
 *      200:
 *       description: A list of categories
 *       content:
 *         application/json:
 *           schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category' 
 */
router.route("/getall").get(getAllcategory)
    
module.exports = router;
