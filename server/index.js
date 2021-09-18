const express = require('express');
const db = require('./config/db');
const fileUpload = require('express-fileupload');
const cors = require('cors');

const cateRouter = require('./routes/categoryRouter');
const productRouter = require('./routes/productRouter');
const flashsaleRouter = require('./routes/flashsaleRouter');
const userRouter = require('./routes/userRouter');
const reviewRouter = require('./routes/reviewRouter');
const orderRouter = require('./routes/orderRouter');
const uploadRouter = require('./routes/uploadRouter');

//Connect Express
const app = express();
//Define app use json
app.use(express.json());
//Define app use file upload
app.use(fileUpload({
    useTempFiles: true
}))
//Define cors to orther domain access
app.use(cors());
//Connect Mongodb
db.connect();

//Define api of category
app.use('/api/category', cateRouter)
//Define api of product
app.use('/api/product', productRouter)
//Define api of product
app.use('/api/flashsale', flashsaleRouter)
//Define api of user
app.use('/api/admin', userRouter)
//Define api of review
app.use('/api/review', reviewRouter)
//Define api of order
app.use('/api/order', orderRouter)
//Define api of upload function
app.use('/api', uploadRouter)


const PORT = 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))