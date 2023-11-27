const express = require("express");
const { reviewCreate, getAllreview } = require("../Controllers/Review");
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Review:
 *       type: object
 *       properties: 
 *         user:
 *           type: string
 *           description: The user ID associated with the Review.
 *         product:
 *           type: string
 *           description: The product ID associated with the Review.
 *         rating:
 *           type: number
 *           description: Rating of user
 *         review: 
 *           type: string
 *           description: The review
 *         date:
 *           type: string
 *           format: date
 *           description: The date of the review.
 */

/**
 * @swagger
 * /api/review/create:
 *   post: 
 *     summary: create a new review
 *     tags:
 *       - Review
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Review'
 *     responses:
 *       '201':
 *         description: The created order
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Review'
 */
router.post("/create", reviewCreate);

/**
 * @swagger
 * /api/review/getall:
*  get:
*     summary: Get all Review
*     tags:
*       - Review
*     description: Retrieve a list of all Review.
*     responses:
*       '200':
*         description: A list of Review.
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/Review'
*  
*/

router.get("/getall", getAllreview);
module.exports = router;
