const express = require("express")
const { create_OrderItems } = require("../Controllers/OrderItems")

const router = express.Router()

router.post("/create",create_OrderItems)

module.exports = router;
