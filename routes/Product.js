// Product.js

const express = require("express");
const { createProduct, getAllProduct, getProductById, postProductImages, deleteProduct } = require("../Controllers/Product");
const router = express.Router();
const multer = require("multer")

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname.replace(/ /g, ''));
    },
  }),
}).array('images');
  
/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         productname:
 *           type: string
 *         description:
 *           type: string
 *         price:
 *           type: string
 *         sizes:
 *           type: array
 *           items:
 *             type: string
 *         category:
 *           type: string
 */ 

/**
 * @swagger
 * /api/products/create:
 *   post:
 *     summary: Create a new product
 *     tags:
 *       - Products
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       '201':
 *         description: Successfully created product
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       '400':
 *         description: Bad request. Invalid data.
 */
router.post("/create",createProduct);
/**
 * @swagger
 * /api/products/productimages/{id}:
 *   post:
 *     summary: Upload product image
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product
 *         schema:
 *           type: string
 *     tags:
 *       - Products
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       '200':
 *         description: Successfully uploaded image
 *       '400':
 *         description: Bad request. Invalid data.
 */

router.post("/productimages/:id", upload,postProductImages)
/**
 * @swagger
 * /api/products/get:
 *   get:
 *     summary: Get all products
 *     tags:
 *       - Products
 *     description: Retrieve a list of all products.
 *     responses:
 *       '200':
 *         description: A list of products.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */

router.route("/get").get(getAllProduct);

/**
 * @swagger
 *  /api/products/get/{id}:     
 *  get:
 *    summary: Get product by ID
 *    tags:
 *       - Products   
 *    description: Retrieve a product using its ID   
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product  
 *         schema:
 *           type: string
 *    
 *    responses: 
 *      '200':
 *        description: Successful response. Returns a product.
 *        content: 
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 */
router.route("/get/:id").get(getProductById);
/**
 * @swagger
 * /api/products/delete/{id}:
 *   delete:
 *     summary: Delete product by ID
 *     tags:
 *       - Products
 *     description: Delete a product by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product to be deleted
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful response. Returns a product.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 */

router.delete("/delete/:id",deleteProduct)

module.exports = router;
