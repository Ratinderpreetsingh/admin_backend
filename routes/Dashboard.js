const express = require('express')
const {getDashbaord} = require('../Controllers/Dashboard')
const router = express.Router()

router.get('/get',getDashbaord)
module.exports = router;
