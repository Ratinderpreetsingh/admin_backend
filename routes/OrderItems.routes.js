/**
 * @swagger
 * tags:
 *   name: OrderItems
 *   description: OrderItems operations
 */

/**
 * @swagger
 * /api/orderitems/create:
 *   post:
 *     summary: Create a new order item
 *     tags: [OrderItems]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               product:
 *                 type: string
 *                 description: The ID of the product
 *               quantity:
 *                 type: number
 *                 description: The quantity of the product
 *               price:
 *                 type: number
 *                 description: The price of the product
 *     responses:
 *       '200':
 *         description: A successful response
 *       '400':
 *         description: Bad request
 */

const express = require('express');
const { create_OrderItems } = require('../Controllers/OrderItems');

const router = express.Router();

router.post('/create', create_OrderItems);

module.exports = router;
