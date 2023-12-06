const express = require("express")
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const specs = require('./swagger');
require("./db/conn")
const app = express()
app.use(express.json());
app.use(cors());


const port = process.env.PORT || 8080
const product_routes = require("./routes/Product.js")
const category_routes = require("./routes/Category.js")
const user_routes = require("./routes/User.js")
const order_routes = require("./routes/Order.routes.js")
const review_routes = require("./routes/Review.routes.js")
const UserAuth_routes = require("./routes/UserAuth.routes.js")
const orderItems_routes = require("./routes/OrderItems.routes.js")
const dashbaord_routes = require("./routes/Dashboard.js")
app.use('/api/products',product_routes)
app.use('/api/categories',category_routes)
app.use("/api/user",user_routes)
app.use("/api/order",order_routes)
app.use("/api/orderitems",orderItems_routes)
app.use("/api/review",review_routes)
app.use("/api/userAuth",UserAuth_routes)
app.use("/api/dashbaord",dashbaord_routes)



app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


app.listen(port,()=>{
    console.log("connection is setup at",port)
})