const express = require("express")
const {createOrder, getOrderById, getAllorders, delete_order} = require("../Controllers/Order.cont")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       properties:
 *         user:
 *           type: string
 *           description: The user ID associated with the order.
 *         orderItems:
 *           type: array
 *           items:
 *             type: string
 *             description: The ID of a product in the order.
 *         orderDate:
 *           type: string
 *           format: date
 *           description: The date of the order.
 *         totalAmount:
 *           type: number
 *           description: The total amount of the order.
 *         status:
 *           type: string
 *           enum: [pending, processing, completed, cancelled]
 *           description: The status of the order.
 *         shippingAddress:
 *           type: object
 *           properties:
 *             street:
 *               type: string
 *             city:
 *               type: string
 *             state:
 *               type: string
 *             country:
 *               type: string
 *             postalCode:
 *               type: string
 */


/**
 * @swagger
 * /api/order/create:
 *   post:
 *     summary: Create a new order
 *     tags: 
 *       - Order
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       '201':
 *         description: The created order
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 */


router.post("/create",createOrder)

/**
 * @swagger
 * /api/order/get/{id}:
 *   get:
 *     summary: Get product by ID
 *     tags: 
 *       - Order
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful response. Returns a product.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 */

router.get("/get/:id",getOrderById)
/**
 * @swagger
 * /api/order/getAll:
 *   get:
 *     summary: Get all Orders
 *     tags:
 *       - Order
 *     description: Retrieve a list of all Orders.
 *     responses:
 *       '200':
 *         description: A list of Orders.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 */

router.get('/getAll',getAllorders)

/**
 * @swagger
 * /api/order/delete/{id}:
 *   delete:
 *     summary: Delete Order by ID
 *     tags:
 *       - Order
 *     description: Delete a Order by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the Order to be deleted
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful response. Returns a Order.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 */
router.delete('/delete/:id',delete_order)
module.exports = router;
